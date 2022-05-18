import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './components/Screen';
import Accueil from './components/Accueil';
import Nav from './components/Nav';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import initData from './DB/initData';

initData();

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
              backgroundColor: '#222222',
          },
          headerTitle: 'Change User',
          headerTitleStyle: {
            color: 'lightgrey'
          },
          headerTintColor: 'lightgrey'
      }}
      >
        <Stack.Screen name="Accueil" component={Accueil} options={{headerShown:false}}/>
        <Stack.Screen 
          name="Nav" 
          component={Nav} 
          options={{
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
});
