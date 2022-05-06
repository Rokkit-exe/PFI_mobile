import React from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';

function Connection(children, style) {
    return (
        <View style={[styles.container, style]}>
            <TextInput style={styles.textInput} placeholder="email/username" keyboardType="email-address"></TextInput>
            <TextInput style={styles.textInput} placeholder="Mot de passe" keyboardType="default" secureTextEntry={true}></TextInput>
            <Pressable style={styles.button} title='Connection'>
                <Text>Connection</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 25,
        height: 60,
        width: '90%',
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