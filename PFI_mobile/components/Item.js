import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


function Item({item, icon, onPress}) {
    let [details, setDetails] = useState(null)

    const toggle = () => details != null ? setDetails(null) : setDetails(newdetails)
    return (
        <TouchableOpacity style={styles.container} onPress={() => toggle()}>
            <View style={styles.itemContainer}>
                <View>
                    <Text style={styles.name}>{item.nom}</Text>
                    <Text style={styles.text}>{item.prix}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: item.image}}/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <MaterialCommunityIcons name={icon} style={styles.icons} color="lightblue"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.text}>Details: {item.details}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2D2D',
        flex: 1,
        padding: 20,
        width: '90%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#7952B3',
        marginTop: 10,
        marginLeft: '5%'
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    },
    detailsContainer: {
        marginLeft: '5%',
        marginTop: 20
    },
})

export default Item;