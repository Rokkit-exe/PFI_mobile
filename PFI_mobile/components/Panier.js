import React from 'react';
import { View, StyleSheet, Text, FlatList, Pressable, Image } from 'react-native';
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

const renderItem = ({item}) => <Item item={item} icon='trash-can'/>

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
                <View style={styles.subsubContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.total}>
                            Total: 1000$
                        </Text>
                    </View>
                    <Pressable style={styles.buy}>
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
        marginTop: 3,
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
        marginRight: 130,
        fontSize: 25
    },
    buy: {
        height: 70,
        width: 70,
        backgroundColor: 'green',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Panier;