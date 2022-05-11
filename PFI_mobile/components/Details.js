import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from './Screen';
function Details({item}) {
    return (
        <View style={styles.container}>
            <Text>info: {item.info}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
})

export default Details;