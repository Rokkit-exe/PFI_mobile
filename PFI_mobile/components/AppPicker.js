import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Screen from './Screen';
import PickerItem from './PickerItem';



function AppPicker({
    icon = 'account', 
    items, 
    placeholder = 'pick a user',
    numberOfColumns = 1,
    onSelectItem, 
    selectedItem, 
    PickerItemComponent = PickerItem 
}) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={[styles.container]}>
                    { icon && (
                        <MaterialCommunityIcons 
                            name={icon}
                            size={20} 
                            color='#fff'
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <Text style={styles.text}>{selectedItem.label}</Text>
                    ) : (
                        <Text style={styles.text}>{placeholder}</Text>
                    )} 
                    
                    <MaterialCommunityIcons name="chevron-down" size={20} color={'#fff'} />
                </View>
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType='slide' >
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                    <FlatList
                        style={styles.flatList}
                        data={items}
                        keyExtractor={item => item.usager}
                        numColumns={numberOfColumns}
                        renderItem={({item}) => 
                            <PickerItemComponent 
                                item={item}
                                label={item.usager} 
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                                icon='account'
                            />
                        }
                    />
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#222222'
    },
    container: {
        backgroundColor: '#7952B3',
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        width: "80%"
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2F3337',
        height: 35,
        borderColor: 'black',
        borderWidth: 1
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
        color: '#fff'
    },
    buttonText: {
        color: 'lightgrey',
        fontSize: 20,
    }
})

export default AppPicker;

