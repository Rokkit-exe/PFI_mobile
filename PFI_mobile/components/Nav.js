import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Button, Text } from 'react-native';
import Screen from '../KnapSack_app/components/Screen';


const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <Screen>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name=" Home" component={Page0} />
                    <Stack.Screen name=" Ecran2" component={Page2} />
                </Stack.Navigator>
            </NavigationContainer>
        </Screen>
    );
}

const Page2 = ({ navigation }) => {
    return (
        <View>
            <Text>Deuxième Écran</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}
const Page0 = ({ navigation }) =>
    <View>
        <Text>Home</Text>
        <Button title="Deuxième Écran" onPress={() => navigation.navigate("Ecran2")} />
    </View>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
