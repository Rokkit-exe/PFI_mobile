import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';

function Connection({navigation, style}) {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    const connection = () => {
        if (username.length > 0 && password.length > 0) {
            console.log("nav")
            navigation.navigate('Nav')
        }
        else {
            console.log("error")
        }
    }
    return (
        <View style={[styles.container, style]}>
            <TextInput style={styles.textInput} onChangeText={(val) => setUsername(val)} placeholder="email/username" keyboardType="email-address"></TextInput>
            <TextInput style={styles.textInput} onChangeText={(val) => setPassword(val)} placeholder="Mot de passe" keyboardType="default" secureTextEntry={true}></TextInput>
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