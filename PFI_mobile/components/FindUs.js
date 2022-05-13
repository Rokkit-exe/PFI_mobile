import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, useWindowDimensions, Pressable } from 'react-native';
import Screen from './Screen';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const findLocation = () => {
        useEffect(() => {(
            async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
            let location = await Location.getCurrentPositionAsync({});
            return location
            })();
        }, []);
}


function FindUs(props) {
    let initialRegion = {
        latitude: 45.64102535408063,
        longitude: -73.84293213486671,
        latitudeDelta: 0.017090747856997268,
        longitudeDelta: 0.01128941774366865
    }

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState(initialRegion)
    const {height, width} = useWindowDimensions()

    let text = 'Getting location ...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = 'location set'
        let loc = location
        setRegion({
            latitude: loc['coords']['latitude'],
            longitude: loc['coords']['longitude'],
            latitudeDelta: 1,
            longitudeDelta: 1
        })
    }

    return (
        <Screen style={styles.container}>
            {/* <Text>{text}</Text> */}
            <Pressable style={styles.button} onPress={() => setLocation(findLocation())}>
                <Text style={styles.buttonText}>
                    Find My Location
                </Text>
            </Pressable>
            <MapView
                style={{height: height, width: width}}
                provider="google"
                region={region}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    },
    button: {
        height: 40,
        width: '70%',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#044A64',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'lightgrey'
    }
})

export default FindUs;