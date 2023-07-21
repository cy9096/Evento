import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
} from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Slider, Icon } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
import FlatListComponent from "./FlatListComponent";


export default function App() {
  const [long, setLong] = useState(10);
  const [lat, setLat] = useState(44);
  const [radius, setRadius] = useState(500);
  const [show, setShow] = useState("map");
  const [fethcData, setFetchData] = useState([]);
  const [category, setCategory] = useState("nightLife");
  const mapView = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Museums", value: "museum" },
    { label: "Night life", value: "nightLife" },
  ]);

  const interpolate = (start, end) => {
    let k = (radius - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const addToFavorites = async (item) => {
    //let temp = {
    //  id:item.id,
    //  address: item.address,
    //  description: item.description,
    //  image: item.image,
    //  location: item.location
    //}
    let endpoint =
      "https://evento-a583e-default-rtdb.europe-west1.firebasedatabase.app";
    try {
      const response = await fetch(`${endpoint}/favorits/${item.id}.json`, {
        method: "PUT",
        body: JSON.stringify(item),
      });

      if (response.ok) {
        setFetchData((prevFavorites) => [...prevFavorites, item]);
        Alert.alert("Item added to favorites");
      } else {
        console.log("Error adding item to favorites:", response.status);
      }
    } catch (error) {
      console.log("Error adding item to favorites:", error);
    }
  };

  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };

  const ftchData = async () => {
    // Fetch data from Firebase and update the state
    const response = await fetch(
      `https://evento-a583e-default-rtdb.europe-west1.firebasedatabase.app/${category}.json`
    );
    const data = await response.json();
    const postsArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    })); // from object to array
    postsArray.sort((postA, postB) => postB.createdAt - postA.createdAt); // sort by timestamp/ createdBy
    setFetchData(postsArray);
  };

  useEffect(() => {
    ftchData();
  }, [radius]);

  useEffect(() => {
    getLocation();
  }, []);

  const markers = () => {
    setFetchData(fethcData);
  };

  useEffect(() => {
    markers();
  }, [fethcData]);

  const MarkersMap = () => {
  const filteredMarkers = fethcData.filter((element) => {
    const distance = Math.sqrt(
      Math.pow(element.location.lat - lat, 2) +
      Math.pow(element.location.long - long, 2)
    );
    return distance <= radius;
  });

  return filteredMarkers.map((element) => (
    <Marker
      key={element.id}
      coordinate={{
        latitude: Number(element.location.long),
        longitude: Number(element.location.lat),
      }}
      title={element.id}
      description={element.description}
    />
  ));
};


useEffect(() => {
  mapView.current?.animateToRegion(
    {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.005 * (radius / 500), // Adjust the zoom level based on the radius
      longitudeDelta: 0.005 * (radius / 500), // Adjust the zoom level based on the radius
    },
    250
  );
}, [mapView.current, lat, long, radius]);

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Error", "Permission to access location was denied");
      return;
    }
    const location = await Location.getCurrentPositionAsync();
    setLong(location.coords.longitude);
    setLat(location.coords.latitude);
  }

  return (
    <View style={styles.container}>
      {show == "map" ? (
        <MapView
          ref={mapView}
          style={styles.mapView}
          showsUserLocation
          followUserLocation
          showsPointsOfInterest={false}
        >
          <Marker
            coordinate={{ latitude: lat, longitude: long }}
            title="title"
            description="Here I am"
          />
          <MarkersMap />
          <Circle
            center={{ latitude: lat, longitude: long }}
            radius={radius}
            strokeColor="orange"
            strokeWidth={3}
          />
        </MapView>
      ) : (
        <FlatListComponent
          fethcData={fethcData}
          addToFavorites={addToFavorites}
        />
      )}
      <Button
        title="map"
        onPress={() => {
          setShow("map");
        }}
      ></Button>
      <Button
        title="list"
        onPress={() => {
          ftchData();
          setShow("list");
        }}
      ></Button>
      <View style={[styles.contentView]}>
        <Slider
          value={radius}
          onValueChange={setRadius}
          maximumValue={100000}
          minimumValue={0}
          step={1}
          allowTouchTrack
          trackStyle={{ height: 5, backgroundColor: "transparent" }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon
                name="heartbeat"
                type="font-awesome"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color={color()}
              />
            ),
          }}
        />
      </View>
      <DropDownPicker
        style={styles.dropD}
        open={open}
        value={category}
        items={items}
        setOpen={setOpen}
        setValue={setCategory}
        setItems={setItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },

  mapView: {
    height: "50%",
    width: "100%",
  },
  contentView: {
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "stretch",
  },
});
