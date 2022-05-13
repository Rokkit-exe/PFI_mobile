import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


function PickerItem({item, onPress, icon}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
            <View style={[styles.container]}>
                <MaterialCommunityIcons 
                    name={icon}
                    size={20} 
                    color='#fff'
                    style={styles.icon}
                />
                <Text style={styles.text}>{item.usager}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#7952B3',
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        width: "80%"
    },
    text: {
        marginLeft: 20,
        flex: 1,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PickerItem;