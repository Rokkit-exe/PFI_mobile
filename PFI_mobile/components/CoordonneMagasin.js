import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import commerces from "../commerces.json";

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


function CoordonneMagasin(props) {
  const { height, width } = useWindowDimensions();
  const [currentCommerce, setCurrentCommerce] = useState(0);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.titre}>Les Bureaux d'échange de Crypto</Text>

        <MapView
          style={{ height: height * 0.8, width: width }}
          provider="google"
          initialRegion={RegionMontreal}
        >
          {commerces.map((b) => (
            <Marker
              key={b.id}
              title={b.nom}
              coordinate={b.coord}
              onPress={() => setCurrentCommerce(b.id)}
            />
          ))}
          <Polyline
            coordinates={points}
            strokeColor="rgb(254, 128, 0)"
            strokeWidth={8}
          />
        </MapView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titre: {
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

export default CoordonneMagasin;
