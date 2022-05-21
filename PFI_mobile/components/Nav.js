import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'; 

import Magasin from './Magasin';
import About from './About';
import Panier from './Panier';
import Locations from './Locations';


const Tab = createBottomTabNavigator();

export default function Nav({navigation, route}) {
    const {user} = route.params

    return (
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#222222',
                },
                tabBarActiveTintColor: '#7952B3',
                tabBarInactiveTintColor: 'lightgrey',
            }}
        >
            <Tab.Screen 
                initialParams={{selectedUser: user}}
                name={user.usager} 
                component={Magasin}
                options={{ 
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="store" style={styles.icons} color={focused ? "#7952B3" : "lightgrey"} />,
                    headerShown: false,
                    }} />
            <Tab.Screen
                initialParams={{selectedUser: user}}
                name="Panier" 
                component={Panier}
                options={{ 
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="cart" color={focused ? "#7952B3" : "lightgrey"} style={styles.icons}/>,
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="About" 
                component={About} 
                options={{ 
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="information" color={focused ? "#7952B3" : "lightgrey"} style={styles.icons}/>,
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Locations" 
                component={Locations} 
                options={{ 
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="map-marker-star" color={focused ? "#7952B3" : "lightgrey"} style={styles.icons}/>,
                    headerShown: false,
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
