import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Pressable, Image, Alert, TouchableOpacity } from 'react-native';
import Screen from './Screen';
import Item from './Item';
import { Database } from '../DB/database';

const db = new Database("Magasin");

// Remplacer cette liste par les valeurs de la BD


function Panier(props) {
    const getTotal = (items) => {
        let total = 0
        items && items.forEach((x) => total += x.prix)
        return total
    }
    

    let [totals, setTotal] = useState(0);
    let [userId, setUserId] = useState(-1)
    let [panier, setPanier] = useState([])

    const getConnectedUser = () => {
        db.execute("select id from Connexion where connected = '1'")
        .then((res) => {
            setUserId(res.rows[0].id)
            return res.rows[0].id
        })
    }

    const removeItem = (items, id) => {
        let newItems = []
        items.forEach((item) => item.id != id && newItems.push(item))
        setPanier(newItems)
        setTotal(getTotal(items))
    }

    const getPanierUsager = (user) => {
        console.log(user)
        db.execute(`select Panier.id, idUsager, idProduit, nom, prix, image from Panier join Produits on Panier.idProduit = Produit.id where Panier.idUsager = ${user}`)
        .then((res) => {
            console.log(`rows : ${res.rows}`)
            setPanier(res.rows)
        })
    }

    const removeAllItemsPanier = () => {
        db.execute(`delete from Panier where idUsager = ${userId}`)
    }

    const removeItemPanier = (itemId) => {
        db.execute(`delete from Panier where idUsager = ${userId} and idProduit = ${itemId}`)
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
                { text: "Oui", onPress: () => {removeAllItemsPanier();setTotal(0)} }
            ]
        );
    }
    
    const renderItem = ({item}) => <Item item={item} icon='trash-can' onPress={() => {removeItem(panier, item.id); removeItemPanier(item.id)}}/>

    return (
        <Screen style={styles.container} onLayout={() => {
            getPanierUsager(getConnectedUser())            
        }}>
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
                            Total: {totals}$
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.buy} onPress={() => buy()}>
                        <Image style={styles.icon} source={require('../assets/buy.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
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