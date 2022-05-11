import React, {useState} from 'react';
import { View, StyleSheet, Image, Button, Pressable, Text } from 'react-native';

import Screen from './Screen';
import Connection from './Connection';

function Accueil({navigation}) {
    const connForm = <Connection style={styles.connection} navigation={navigation}/>
    const connButton = <Pressable style={styles.button} onPress={() => setConn(connForm)} >
                            <Text style={styles.buttonText}>Connection</Text>
                        </Pressable>
    let [conn, setConn] = useState(connButton)
    return (
        <Screen style={styles.container}>
            <View style={styles.subContainer}>
                <Image style={styles.image} source={require('../assets/shop_logo.png')}/>
            </View>
                {conn}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#044A64',
        alignItems: 'center'
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: "stretch",
        marginBottom: 50
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00C851',
        borderRadius: 30,
        borderWidth: 2,
        height: 60,
        width: '60%'
    },
    buttonText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Accueil;