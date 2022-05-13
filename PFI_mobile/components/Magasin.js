import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, Button, Pressable } from 'react-native';
import Screen from './Screen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details';
import Item from './Item';
import {Database} from "../DB/database";

const db = new Database("Magasin");

const renderItem = ({item}) => <Item item={item} icon='plus'/>

function Magasin(props) {
    let [items, setItems] = useState(null)

    const loadItems = () => {
        db.execute("select nom, prix, image from Produits")
        .then((res) => {
            console.log(res.rows)
            setItems(res.rows)
        })
    }
    return (
        <Screen style={styles.container} onLayout={() => loadItems()}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.nom}
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
