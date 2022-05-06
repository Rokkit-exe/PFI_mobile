import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';

import Screen from './Screen';
import Connection from './Connection';

function Accueil(props) {
    const conn = <Connection style={styles.connection}/>

    return (
        <Screen style={styles.container}>
            <View>
                <Image/>
            </View>
            <Button onPress={() => conn}>Connection</Button>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    connection: {

    }
})

export default Accueil;