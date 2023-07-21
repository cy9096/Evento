import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  View,
  Button,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const dummyArray = [
  { id: "1", value: "Settings", icon: "settings-outline" },
  { id: "2", value: "Language", icon: "language-outline" },
  { id: "3", value: "Location", icon: "location-outline" },
  { id: "4", value: "Notifications", icon: "notifications-outline" },
  { id: "5", value: "Logout", icon: "log-out-outline" },
];

export default function Profile() {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({ item }) => {
    const handleItemPress = () => {
      getItem(item);
    };

    return (
      <TouchableOpacity style={styles.userContainer} onPress={handleItemPress}>
        <Ionicons name={item.icon} size={32} color="black" />
        <Text style={styles.item}>{item.value}</Text>
        <Ionicons
          style={styles.chevron}
          name="chevron-forward-outline"
          size={32}
          color="#264c59"
        />
      </TouchableOpacity>
    );
  };

  function getItem(item) {
    const { value } = item;
    return value;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listItems}
        renderItem={ItemView}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    // borderBottomColor: "#acc6c9",
    // borderBottomWidth: 0.5,
    backgroundColor: "white",
  },
  item: {
    marginLeft: 12,
    fontSize: 14,
    flex: 1,
  },
  chevron: {
    marginLeft: "auto",
  },
});
