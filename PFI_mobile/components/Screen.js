import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function Screen({children, style, onLayout}) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={[styles.screen, style]}>
                <View style={[styles.view, style]} onLayout={onLayout}>{children}</View>
            </SafeAreaView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1D1B1B',
        flex: 1
    },
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    },
    view: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1D1B1B'
    }
})

export default Screen;