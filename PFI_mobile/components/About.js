import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from './Screen';

function About(props) {
    return (
        <Screen style={styles.container}>
            <Text>About</Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})

export default About;