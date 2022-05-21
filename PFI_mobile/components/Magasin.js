import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Item from './Item';
import {Database} from "../DB/database";
import AddItem from './AddItem';

const db = new Database("Magasin");



function Magasin({navigation, route}) {
    const {selectedUser} = route.params
    let [items, setItems] = useState(null)
    let [user, setUser] = useState(selectedUser)
    
    const addItemPanier = (item) => {
        db.execute(
            `insert into Panier (idUsager, idProduit, nom, prix, image) values (${user.id}, ${item.id}, '${item.nom}', '${item.prix}', '${item.image}')`
        );
    }
    
    const renderItem = ({item}) => {
        return <Item item={item} icon='plus' onPress={() => addItemPanier(item)}/>
    }

    const loadItems = () => {
        db.execute("select id, nom, prix, image, details from Produits")
        .then((res) => {
            setItems(res.rows)
        })
    }
    return (
        <View 
            style={styles.container} 
            onLayout={() => {
                loadItems()
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
