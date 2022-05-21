import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import MapView, { Marker, Polyline, Callout } from "react-native-maps";
import locations from "../commerces.json";


const points = [
  { latitude: 45.64083762459042, longitude: -73.8429379391031 },
  { latitude: 45.633516065198215, longitude: -73.81959199179795 },
  { latitude: 45.670354205626204, longitude: -73.76740693316647 },
  { latitude: 45.61751940292335, longitude: -73.71026603375641 },
  { latitude: 45.60671227207023, longitude: -73.7118109861516 },
];

const RegionMontreal = {
    "latitude": 45.57959635115827,
    "latitudeDelta": 0.2898489739060395,
    "longitude": -73.80305992439389,
    "longitudeDelta": 0.24999964982271194,
};


function Locations(props) {
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titre}>Les Bureaux d'échange de Crypto</Text>
      </View>
        <MapView
          style={{ height: height * 0.8, width: width }}
          provider="google"
          initialRegion={RegionMontreal}
        >
          {locations.map((b) => (
            <Marker
              key={b.id}
              pinColor={b.id == 50 ? 'green': 'red'}
              coordinate={b.coord}
              onPress={() => setCurrentCommerce(b.id)}
            >
              <Callout>
                <Text style={{color: 'black'}}>{b.nom}</Text>
                <Text style={{color: 'lightgrey'}}>{b.sousTitre}</Text>
              </Callout>
            </Marker>
          ))}
          <Polyline
            coordinates={points}
            strokeColor="rgb(254, 128, 0)"
            strokeWidth={8}
          />
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D1B1B",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginTop: 17,
    height: 40,
  },
  titre: {
    color: 'lightgrey',
    fontSize: 25,
    alignItems: "center",
    padding: 8,
  },
  pressable: {
    backgroundColor: "hsl(38, 100%, 50%)",
    padding: 8,
    margin: 5,
    borderRadius: 10,
  },
  pressed: {
    backgroundColor: "hsl(50, 100%, 50%)",
  }
});

export default Locations;
