import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, Alert, TouchableOpacity } from 'react-native';
import Item from './Item';
import { Database } from '../DB/database';


const db = new Database("Magasin");


function Panier({navigation, route}) {
    
    const getTotal = (items) => {
        let total = 0
        items && items.forEach((x) => total += x.prix)
        return total
    }
    
    const {selectedUser} = route.params

    let [total, setTotal] = useState(0);
    let [user, setUser] = useState(selectedUser)
    let [panier, setPanier] = useState(null)

    const getPanier = () => {
        db.execute(`select * from Panier where idUsager = ${user.id}`)
        .then((res) => {
            setPanier(res.rows)
            setTotal(getTotal(res.rows))
        })
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => getPanier());    
        return unsubscribe;
    }, [navigation]);

    const removeItemPanier = (id) => {
        db.execute(`delete from Panier where idProduit = ${id} and idUsager = ${user.id}`)
    }

    const removeItem = (items, id) => {
        let newItems = []
        items.forEach((item) => item.id != id && newItems.push(item))
        setPanier(newItems)
        setTotal(getTotal(newItems))
        removeItemPanier(id)
    }

    const removeAllItemPanier = () => {
        db.execute(`delete from Panier where idUsager = ${user.id}`)
        .then((res) => {
            setPanier(null)
            setTotal(0)
        })
    }

    const buy = () => {
        Alert.alert(
            "Compléter vos achat",
            "êtes vous certain de vouloir complété votre achat",
            [
                {
                    text: "Non",
                    style: "cancel"
                },
                { text: "Oui", onPress: () => removeAllItemPanier() }
            ]
        );
    }
    
    const renderItem = ({item}) => <Item item={item} showDetails={false} icon='trash-can' onPress={() => {removeItem(panier, item.id)}}/>

    return (
        <View style={styles.container} onLayout={() => getPanier()}>
            <FlatList
                data={panier}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.flatlist}
            />
            <View style={styles.subContainer}>
                <View style={styles.subsubContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.total}>
                            Total: {total}$
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.buy} onPress={() => buy()}>
                        <Image style={styles.icon} source={require('../assets/buy.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D1B1B'
    },
    flatlist: {
        width: '100%'
    },
    subContainer: {
        position: 'absolute',
        bottom: 20,
        height: 80,
        width: '90%',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#7952B3',
        backgroundColor: '#1D1B1B',
    },
    subsubContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
    },
    icon: {
        height: 30,
        width: 30,
    },
    total: {
        fontSize: 25,
        color: 'lightgrey'
    },
    buy: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
    },
    textContainer: {
        height: 75,
        width: 270,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Panier;