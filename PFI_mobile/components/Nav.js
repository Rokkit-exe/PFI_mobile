import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Button, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'; 

import Screen from './Screen';
import Magasin from './Magasin';
import About from './About';
import FindUs from './FindUs';
import Panier from './Panier';


const Tab = createBottomTabNavigator();
export default function Nav() {
    return (
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen 
                name="Magasin" 
                component={Magasin} 
                options={{ 
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="store" style={styles.icons} color={focused ? "blue" : "lightblue"} />,
                    headerShown: false
                    }} />
            <Tab.Screen 
                name="Panier" 
                component={Panier} 
                options={{ 
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="cart" color={focused ? "blue" : "lightblue"} style={styles.icons}/>,
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="About" 
                component={About} 
                options={{ 
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="information" color={focused ? "blue" : "lightblue"} style={styles.icons}/>,
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Find us" 
                component={FindUs} 
                options={{ 
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="map-marker-star" color={focused ? "blue" : "lightblue"} style={styles.icons}/>,
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons: {
        fontSize: 25
    }
});
