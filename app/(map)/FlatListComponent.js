import React from "react";
import { Searchbar, Card, Text, DropDownPicker } from "react-native-paper";
import {
  View,
  Image,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const FlatListComponent = ({ fethcData, addToFavorites }) => {
  const handleAddToFavorites = (item) => {
    addToFavorites(item);
  };

  return (
    <FlatList
      data={fethcData}
      renderItem={({ item }) => (
        <View>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Actions>
              <Text style={styles.cardText}>{item.id}</Text>
            </Card.Actions>
            <Card.Actions style={styles.cardText}>
              <Text style={styles.cardText}>{item.description}</Text>
            </Card.Actions>
            <Card.Actions>
              <Text style={styles.cardText}>{item.address}</Text>
            </Card.Actions>
            <Card.Actions>
              {/* <Button
            title="Add to Favorites"
            onPress={() => handleAddToFavorites(item)}
          /> */}
              <TouchableOpacity
                style={styles.buttonSignUp}
                onPress={() => handleAddToFavorites(item)}
              >
                <Text>Add to Favorites</Text>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  buttonSignUp: {
    marginTop: 10,
    backgroundColor: "#DDC3FF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: "left",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  buttonSignUp: {
    marginTop: 10,
    backgroundColor: "#DDC3FF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
