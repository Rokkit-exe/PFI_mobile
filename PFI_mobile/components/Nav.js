import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Screen from './Screen';
import Magasin from './Magasin';
import About from './About';
import FindUs from './FindUs';
import Panier from './Panier';


const Tab = createBottomTabNavigator();
export default function Nav() {
    return (
        <Screen style={styles.container}>
            <Tab.Navigator initialRouteName="Home" >
                <Tab.Screen name="Magasin" component={Magasin} options={{ tabBarIcon: ({ focused }) => <Ionicons name="home" color={focused ? "blue" : "lightblue"}/> }} />
                <Tab.Screen name="Panier" component={Panier} options={{ tabBarIcon: ({ focused }) => <Ionicons name="home" color={focused ? "blue" : "lightblue"}/> }}/>
                <Tab.Screen name="About" component={About} options={{ tabBarIcon: ({ focused }) => <Ionicons name="home" color={focused ? "blue" : "lightblue"}/> }}/>
                <Tab.Screen name="Find us" component={FindUs} options={{ tabBarIcon: ({ focused }) => <Ionicons name="home" color={focused ? "blue" : "lightblue"}/> }}/>
            </Tab.Navigator>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
