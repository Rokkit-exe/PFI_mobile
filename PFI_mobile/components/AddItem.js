import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

function AddItem(props) {
    let [nom, setNom] = useState(null)
    let [prix, setPrix] = useState(null)
    let [image, setImage] = useState(null)

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(nom) => setNom(nom)}
                placeholder='entrer le nom du produit'
            />
            <TextInput
                style={styles.input}
                onChangeText={(prix) => setPrix(prix)}
                placeholder='entrer le prix du produit'
                keyboardType='numeric'
            />
            <TextInput
                style={styles.input}
                onChangeText={(image) => setImage(image)}
                placeholder='entrer un URL'
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Ajouter Item</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
        flex: 1,
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