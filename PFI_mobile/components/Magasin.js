import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, Button, Pressable } from 'react-native';
import Screen from './Screen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details';
import Item from './Item';



const Stack = createNativeStackNavigator();

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
]

const renderItem = ({item}) => <Item item={item} icon='plus'/>


function Magasin(props) {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.flatlist}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatlist: {
        flex: 1,
        width: '100%',
    },
    
})

export default Magasin;
