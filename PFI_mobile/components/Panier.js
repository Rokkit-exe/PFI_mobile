import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from './Screen';
function Panier(props) {
    return (
        <Screen style={styles.container}>
            <Text>Panier</Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})

export default Panier;