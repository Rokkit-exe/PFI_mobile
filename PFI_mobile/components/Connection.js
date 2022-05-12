import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useNa } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import AppPicker from './AppPicker';
// remplacer cette liste par les user de la BD
const users = [
    {
        id: 1,
        name: 'Frank'
    },
    {
        id: 2,
        name: 'Bob'
    },
    {
        id: 3,
        name: 'Peter'
    },
    {
        id: 4,
        name: 'Paul'
    },
]

function Connection({style}) {
    let [user, setUser] = useState(null)
    const navigation = useNavigation()
    const connection = () => {
        if (user != "") {
            console.log("nav")
            navigation.navigate('Nav')
        }
        else {
            console.log("error")
        }
    }
    return (
        <View style={[styles.container, style]}>
            <AppPicker items={users} onSelectItem={(user) => setUser(user)} placeholder={user ? user.name : 'pick a user'}></AppPicker>
            <Pressable style={styles.button} title='Connection' onPress={() => connection()}>
                <Text>Connection</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 25,
        height: 60,
        width: '70%',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingLeft: 15,
        fontSize: 18
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'grey',
        height: 60,
        width: '70%',
        margin: 20
    },
    buttonText: {
        
    }
})

export default Connection;