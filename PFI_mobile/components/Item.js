import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Details from './Details';
import {MaterialCommunityIcons} from '@expo/vector-icons';


function Item({item}) {
    let [details, setDetails] = useState()
    const newdetails = () => <Details item={item}/>
    const toggle = () => {
        if (details != null)
            setDetails(null)
        else
            setDetails(newdetails)
    }
    return (
        <Pressable style={styles.itemContainer} onPress={() => toggle()}>
            <View>
                <Text>Name: {item.name}</Text>
                <Text>Price: {item.price}$</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item.image}}/>
            </View>
            <View style={styles.buttonContainer}>
                {/* // ********* remplcer le console.log() par la fonction qui ajoute un item dans la BD Panier ********** */}
                <Pressable style={styles.button} onPress={() => console.log(`${item.name} ajouter au panier`)}>
                    <MaterialCommunityIcons name="plus" style={styles.icons} color="lightblue"/>
                </Pressable>
            </View>
            {details}
        </Pressable>
        
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        borderRadius: 15,
        borderWidth: 2,
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
        fontSize: 30
    }
})

export default Item;