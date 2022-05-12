import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useNa } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import AppPicker from './AppPicker';
import {Database} from '../DB/database'


function Connection({style}) {
    let [users, setUsers] = useState(null)
    let [selectedUser, setSelectedUser] = useState(null)
    const db = new Database('Magasin');
    const loadUsers = () => {
        db.execute("select usager, motdepasse, admin from Connexion")
        .then((res) => {
            console.log('it works')
            setUsers(res.rows)
        })
    }
    const navigation = useNavigation()
    const connection = () => {
        if (selectedUser != "") {
            navigation.navigate('Nav', {user: selectedUser})
        }
        else {
            console.log("error")
        }
    }
    console.log(users)
    return (
        <View style={[styles.container, style]} onLayout={() => loadUsers()}>
            <AppPicker items={users} onSelectItem={(selectedUser) => setSelectedUser(selectedUser)} placeholder={selectedUser ? selectedUser.usager : 'pick a user'}></AppPicker>
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