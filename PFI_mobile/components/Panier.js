import React from 'react';
import { View, StyleSheet, Text, FlatList, Pressable } from 'react-native';
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
        id: 3,
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
        id: 3,
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
]

const renderItem = ({item}) => <Item item={item}/>

function Panier(props) {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.flatlist}
            />
            <View style={styles.subContainer}>
                <Text>

                </Text>
                <Pressable>
                    <Text>
                        Passer la commande
                    </Text>
                </Pressable>
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
        height: 50,
        width: '90%',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'lightgrey',
        alignItems: 'center'
    }
})

export default Panier;