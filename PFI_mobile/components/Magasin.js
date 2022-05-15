import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, Button, Pressable } from 'react-native';
import Screen from './Screen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details';
import Item from './Item';
import {Database} from "../DB/database";

const db = new Database("Magasin");



function Magasin(props) {
    let [items, setItems] = useState(null)
    let [userId, setUserId] = useState(null)

    const getConnectedUser = () => {
        db.execute("select id from Connexion where connected = '1'")
        .then((res) => {
            setUserId(res.rows[0].id)
        })
    }
    
    const addItemPanier = (item) => {
        db.execute(
            `insert into Panier (idUsager, idProduit) values (${userId}, ${item.id})`
        );
    }
    
    const renderItem = ({item}) => {
        return <Item item={item} icon='plus' onPress={() => addItemPanier(item)}/>
    }

    const loadItems = () => {
        db.execute("select id, nom, prix, image from Produits")
        .then((res) => {
            setItems(res.rows)
        })
    }
    return (
        <Screen 
            style={styles.container} 
            onLayout={() => {
                loadItems()
                getConnectedUser()
            }}
        >
            <FlatList
                data={items}
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
        marginBottom: 20,
    },
    
})

export default Magasin;
