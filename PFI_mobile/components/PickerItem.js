import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

function PickerItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        borderRadius: 35,
        borderColor: 'black',
        borderWidth: 2,
        width: '90%',
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: 20,
        color: 'black',
        fontSize: 25
    }
})

export default PickerItem;