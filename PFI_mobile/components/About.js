import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from './Screen';

function About(props) {
    return (
        <Screen style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>About</Text>
            </View>
            <View>
                <Text style={styles.subHeaderText}>
                    À propos de l'app 
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.devText}>
                    Cette Application est une plateform d'échange de crypto monnaie ou toute 
                    les monnaies les plus poppulaires si retrouve. Il est possible d'acheter et 
                    de vendre des monnaies.
                </Text>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.subHeaderContainer}>
                    <Text style={styles.subHeaderText}>
                        Développeur
                    </Text>
                </View>
                <View style={styles.devContainer}>
                    <Text style={styles.devText}>
                        - Francis Di-Folco
                    </Text>
                    <Text style={styles.devText}>
                        - Kesava Canape Lussier
                    </Text>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        alignItems:'center',
        width: '90%',
        marginVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    header: {
        fontSize: 30,
        color: 'lightgrey',
        fontWeight: '600'
    },
    subHeaderContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    subHeaderText: {
        color: 'lightgrey',
        fontSize: 20,
        fontWeight: '500'
    },
    devText: {
        color: 'lightgrey',
        fontSize: 15,
        fontWeight: '400'
    },
    textContainer: {
        width: '90%',
        marginVertical: 10
    }
})

export default About;