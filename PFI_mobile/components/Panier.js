import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Pressable, Image, Alert } from 'react-native';
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
                    <Pressable style={styles.buy} onPress={() => buy()}>
                        <Image style={styles.icon} source={require('../assets/buy.png')}/>
                    </Pressable>
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
        borderColor: 'black',
        backgroundColor: 'lightgrey',
    },
    subsubContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
    },
    icon: {
        height: 40,
        width: 40,
        color: 'green'
    },
    total: {
        fontSize: 25
    },
    buy: {
        height: 75,
        width: 75,
        backgroundColor: 'green',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        height: 75,
        width: 270,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Panier;