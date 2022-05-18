import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, Button, Pressable, Alert } from 'react-native';
import Screen from './Screen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details';
import Item from './Item';
import {Database} from "../DB/database";
import AddItem from './AddItem';

const db = new Database("Magasin");



function Magasin({navigation, route}) {
    const {selectedUser} = route.params
    let [items, setItems] = useState(null)
    let [user, setUser] = useState(selectedUser)

    const getConnectedUser = () => {
        db.execute("select usager, motdepasse, admin, connected from Connexion where connected = '1'")
        .then((res) => {
            console.log(res.rows[0])
            setUser(res.rows[0])
            
        })
    }
    
    const addItemPanier = (item) => {
        db.execute(
            `insert into Panier (idUsager, idProduit, nom, prix, image) values (${user.id}, ${item.id}, '${item.nom}', '${item.prix}', '${item.image}')`
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
        <View 
            style={styles.container} 
            onLayout={() => {
                loadItems()
                //getConnectedUser()
            }}
        >
            {user.admin == '1' ? <AddItem/> :
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.flatlist}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222'
    },
    flatlist: {
        flex: 1,
        width: '100%',
        marginBottom: 20,
    },
    
})

export default Magasin;
