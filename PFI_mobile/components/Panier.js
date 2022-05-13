import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Pressable, Image, Alert, TouchableOpacity } from 'react-native';
import Screen from './Screen';
import Item from './Item';

// Remplacer cette liste par les valeurs de la BD
const data = [
    {
        id: 1,
        name: "bitcoin",
        price: 35000,
        image: 'https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-how-send-bitcoins-from-paper-wallet-bitcoins-4.png',
        info: 'blablbalbalablaba;ba'
    },
    {
        id: 2,
        name: "bitcoin",
        price: 35000,
        image: 'https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-how-send-bitcoins-from-paper-wallet-bitcoins-4.png',
        info: 'blablbalbalablaba;ba'
    },
    {
        id: 3,
        name: "bitcoin",
        price: 35000,
        image: 'https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-how-send-bitcoins-from-paper-wallet-bitcoins-4.png',
        info: 'blablbalbalablaba;ba'
    },
    {
        id: 4,
        name: "bitcoin",
        price: 35000,
        image: 'https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-how-send-bitcoins-from-paper-wallet-bitcoins-4.png',
        info: 'blablbalbalablaba;ba'
    },
    {
        id: 5,
        name: "bitcoin",
        price: 35000,
        image: 'https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-how-send-bitcoins-from-paper-wallet-bitcoins-4.png',
        info: 'blablbalbalablaba;ba'
    },
    {
        id: 6,
        name: "bitcoin",
        price: 35000,
        image: 'https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-how-send-bitcoins-from-paper-wallet-bitcoins-4.png',
        info: 'blablbalbalablaba;ba'
    },
    {
        id: 7,
        name: "bitcoin",
        price: 35000,
        image: 'https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-how-send-bitcoins-from-paper-wallet-bitcoins-4.png',
        info: 'blablbalbalablaba;ba'
    },
]


function Panier(props) {
    const getTotal = (items) => {
        let total = 0
        items && items.forEach((x) => total += x.price)
        return total
    }
    let [items, setItems] = useState(data);
    let [totals, setTotal] = useState(getTotal(items));

    const removeItem = (items, id) => {
        let newItems = []
        items.forEach((item) => item.id != id && newItems.push(item))
        setItems(newItems)
        setTotal(getTotal(items))
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
                { text: "Oui", onPress: () => {setItems(null);setTotal(0)} }
            ]
        );
    }
    
    const renderItem = ({item}) => <Item item={item} icon='trash-can' onPress={() => removeItem(items, item.id)}/>

    return (
        <Screen style={styles.container}>
            <FlatList
                data={items}
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
        color: 'green'
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