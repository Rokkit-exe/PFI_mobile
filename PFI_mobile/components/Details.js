import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
function Details({item}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details: {item.details}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        marginTop: 20
    },
    text: {
        color: 'lightgrey'
    }
})

export default Details;