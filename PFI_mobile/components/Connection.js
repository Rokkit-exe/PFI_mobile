import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useNa } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import AppPicker from './AppPicker';
import {Database} from '../DB/database';
import {MaterialCommunityIcons} from '@expo/vector-icons';



function Connection({style}) {
    let [users, setUsers] = useState(null)
    let [selectedUser, setSelectedUser] = useState(null)
    const navigation = useNavigation()

    const db = new Database('Magasin');

    const connectUser = () => {
        selectedUser != null && db.execute(`update Connexion set connected = '1' where usager = '${selectedUser.usager}'`)
    }
    const loadUsers = () => db.execute("select usager, motdepasse, admin from Connexion").then((res) => setUsers(res.rows))
    const connection = () => selectedUser != null ? navigation.navigate('Nav', {user: selectedUser}) : alert('you need to pick a user')

    return (
        <View style={[styles.container, style]} onLayout={() => loadUsers()}>
            <AppPicker 
                items={users} 
                onSelectItem={(selectedUser) => setSelectedUser(selectedUser)} 
                placeholder={selectedUser ? selectedUser.usager : 'pick a user'}
            />
            <TouchableOpacity 
                style={styles.button} 
                title='Connection' 
                onPress={() => {
                    connectUser()
                    connection()
                }}
            >
                <MaterialCommunityIcons 
                        name={'connection'}
                        size={20} 
                        color='#fff'
                        style={styles.icon}
                    />
                <Text style={styles.buttonText}>Connection</Text>
            </TouchableOpacity>
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
        alignItems: 'center',
        backgroundColor: '#7952b3',
        borderRadius: 30,
        height: 60,
        width: '60%',
        marginTop: 20,
        flexDirection: 'row'
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '400'
    },
    icon: {
        marginHorizontal: 20
    }
})

export default Connection;