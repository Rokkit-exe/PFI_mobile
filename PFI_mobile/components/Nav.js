import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Button, Text } from 'react-native';

import Screen from './Screen';
import Magasin from './Magasin';
import About from './About';
import FindUs from './FindUs';
import Panier from './Panier';


const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <Screen style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home" >
					<Tab.Screen name="Magasin" component={Magasin} />
					<Tab.Screen name="Panier" component={Panier}/>
                    <Tab.Screen name="About" component={About}/>
                    <Tab.Screen name="Find us" component={FindUs}/>
				</Tab.Navigator>
            </NavigationContainer>
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
