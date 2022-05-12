import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList, Text } from 'react-native';
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
    PickerItemComponent = PickerItem, 
    width = "80%" 
}) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width}]}>
                    { icon && (
                        <MaterialCommunityIcons 
                            name={icon}
                            size={20} 
                            color='black'
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <Text style={styles.text}>{selectedItem.label}</Text>
                    ) : (
                        <Text style={styles.placeholder}>{placeholder}</Text>
                    )} 
                    
                    <MaterialCommunityIcons name="chevron-down" size={20} color={'black'} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='close' style={styles.button} onPress={() => setModalVisible(false)}/>
                    <FlatList
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
                            />
                        }
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    placeholder: {
        color: 'black',
        flex: 1
    },
    button: {
        backgroundColor: 'lightgrey'
    }
})

export default AppPicker;

