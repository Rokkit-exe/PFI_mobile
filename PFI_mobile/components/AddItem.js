import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import {Database} from "../DB/database";

const db = new Database("Magasin");

function AddItem(props) {
    let [nom, setNom] = useState(null)
    let [prix, setPrix] = useState(null)
    let [image, setImage] = useState('https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg')

    const addProduits = () => {
        Alert.alert(
            "Ajout d'un Produit",
            "êtes vous certain de vouloir ajouter ce produit?",
            [
                {
                    text: "Non",
                    style: "cancel"
                },
                { text: "Oui", 
                    onPress: () => {
                        db.execute(`insert into Produits (nom, prix, image) values ('${nom}', '${prix}', '${image}')`)
                        .then((res) => Alert.alert('Ajouter avec succès'));
                    setNom(null)
                    setPrix(null)
                    setImage(null)} 
                }
            ]
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(nom) => setNom(nom)}
                value={nom}
                placeholder='entrer le nom du produit'
            />
            <TextInput
                style={styles.input}
                onChangeText={(prix) => setPrix(prix)}
                value={prix}
                placeholder='entrer le prix du produit'
                keyboardType='numeric'
            />
            <TextInput
                style={styles.input}
                onChangeText={(image) => setImage(image)}
                value={image}
                placeholder='entrer un URL'
            />
            <TouchableOpacity style={styles.button} onPress={() => addProduits()}>
                <Text style={styles.text}>Ajouter Item</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
        height: 300,
        padding: 20,
        width: '90%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#7952B3',
    },
    input: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#7952B3',
        paddingLeft: 15,
        height: 50,
        marginBottom: 10,
        backgroundColor: 'lightgrey',
        width: '90%'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7952b3',
        borderRadius: 30,
        height: 60,
        width: '60%',
        marginTop: 20,
    },
    text: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '400'
    }
})

export default AddItem;