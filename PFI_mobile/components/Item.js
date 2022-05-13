import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Details from './Details';
import {MaterialCommunityIcons} from '@expo/vector-icons';


function Item({item, icon, onPress}) {
    let [details, setDetails] = useState(null)
    const newdetails = () => <Details item={item}/>
    const toggle = () => details != null ? setDetails(null) : setDetails(newdetails)
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => toggle()}>
            <View>
                <Text style={styles.name}>{item.nom}</Text>
                <Text style={styles.text}>Price: {item.prix}$</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item.image}}/>
            </View>
            <View style={styles.buttonContainer}>
                {/* // ********* remplcer le console.log() par la fonction qui ajoute un item dans la BD Panier ********** */}
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <MaterialCommunityIcons name={icon} style={styles.icons} color="lightblue"/>
                </TouchableOpacity>
            </View>
            <View>
                {details}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#2D2D2D',
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#7952B3',
        marginTop: 10,
        marginLeft: '5%'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 75,
        width: 75
    },
    icons: {
        fontSize: 40,
        color: 'lightgrey'
    },
    name: {
        color: 'lightgrey',
        fontSize: 25,
        fontWeight: '500'
    },
    text: {
        color: 'lightgrey',
        fontSize: 18,
        fontWeight: '400'
    }
})

export default Item;