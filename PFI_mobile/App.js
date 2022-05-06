import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Screen from './components/Screen';
import Accueil from './components/Accueil';

export default function App() {
  return (
    <Screen style={styles.container}>
      <Accueil style={styles.subContainer}/>
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
  subContainer: {

  }
});
