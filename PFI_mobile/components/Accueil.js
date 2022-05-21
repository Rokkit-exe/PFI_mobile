import React, {useState} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Screen from './Screen';
import Connection from './Connection';
import initData from '../DB/initData';

function Accueil({navigation}) {
    const connForm = <Connection style={styles.connection} navigation={navigation}/>
    const connButton = <TouchableOpacity style={styles.button} onPress={() => setConn(connForm)} >
                            <Text style={styles.buttonText}>Connection</Text>
                        </TouchableOpacity>
    let [conn, setConn] = useState(connButton)
    return (
        <Screen style={styles.container}>
            <View style={styles.subContainer} onLayout={() => initData()}>
                <Image style={styles.image} source={require('../assets/shop_logo.png')}/>
            </View>
                {conn}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
        backgroundColor: '#7952b3',
        borderRadius: 30,
        height: 60,
        width: '60%'
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Accueil;