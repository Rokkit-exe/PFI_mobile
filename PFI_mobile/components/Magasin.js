import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import Item from './Item';
import {Database} from "../DB/database";
import AddItem from './AddItem';
import Intl from 'intl';
import 'intl/locale-data/jsonp/fr-CA';
import 'intl/locale-data/jsonp/en-CA';

const db = new Database("Magasin");

const trad = {
    fr: {
        currency: {style:"currency", currency: "CAD"},
    },
    en: {
        currency: {style:"currency", currency: "USD"},
    }
}

function Magasin({navigation, route}) {
    const {selectedUser} = route.params
    let [items, setItems] = useState(null)
    let [user, setUser] = useState(selectedUser)
    let [lang, setLang] = useState('fr-CA')

    const traduction = (messageKey) => lang == "fr-CA" ? trad.fr[messageKey] : trad.en[messageKey]
    
    const addItemPanier = (item) => {
        db.execute(
            `insert into Panier (idUsager, idProduit, nom, prix, image) values (${user.id}, ${item.id}, '${item.nom}', '${item.prix}', '${item.image}')`
        );
    }
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => formatItem());    
        return unsubscribe;
    }, [navigation]);
    
    const renderItem = ({item}) => {
        return <Item item={item} icon='plus' onPress={() => addItemPanier(item)}/>
    }

    const loadItems = () => {
        db.execute("select id, nom, prix, image, detailsFR, detailsEn from Produits")
        .then((res) => {
            setItems(res.rows.map((i) => i = {
                detailsFR: i.detailsFR,
                detailsEN: i.detailsEN,
                id: i.id,
                image: i.image,
                nom: i.nom,
                prix: i.prix,
                prixFormat: new Intl.NumberFormat(lang, traduction('currency')).format(i.prix),
                prefix: lang == 'fr-CA' ? "prix: " : "price: ",
                details: lang == 'fr-CA' ? i.detailsFR : i.detailsEN
            }))
        })
    }

    const formatItem = () => {
        loadItems()
        setItems(items && items.map((i) => i = {
            detailsFR: i.detailsFR,
            detailsEN: i.detailsEN,
            id: i.id,
            image: i.image,
            nom: i.nom,
            prix: i.prix,
            prixFormat: new Intl.NumberFormat(lang, traduction('currency')).format(i.prix),
            prefix: lang == 'fr-CA' ? "prix: " : "price: ",
            details: lang == 'fr-CA' ? i.detailsFR : i.detailsEN
        }))
    }
    return (
        <View 
            style={styles.container} 
            onLayout={() => {
                //formatItem()
            }}
        >
            <View style={styles.langContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {setLang('en-CA');}}>
                    <Text style={styles.text}>En</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {setLang('fr-CA');}}>
                    <Text style={styles.text}>FR</Text>
                </TouchableOpacity>
            </View>
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
    },
    langContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        height: 30,
        width: 50,
        backgroundColor: '#7952B3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'lightgrey',
        fontSize: 18,
        fontWeight: '600'
    }
})

export default Magasin;
