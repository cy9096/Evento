import React, { useEffect } from "react";
import {
  Searchbar,
  Card,
  Button,
  Text,
  DropDownPicker,
} from "react-native-paper";
import {
  StyleSheet,
    FlatList,
  UIScrollViewDecelerationRateFast,
    View,
  country,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [browse, setBrowse] = React.useState([]);
  const [browse1, setBrowse1] = React.useState([]);
    const [browse2, setBrowse2] = React.useState([]);
    
    const OFFSET = 50;

  useEffect(() => {
    const fetchBrowse = async () => {
      try {
        const response = await fetch(
          "https://evento-a583e-default-rtdb.europe-west1.firebasedatabase.app/favorits.json"
        );
        const data = await response.json();

        if (data) {
          const browseArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setBrowse(browseArray);
        }
      } catch (error) {
        console.log("Error fetching favorites:", error);
      }
    };

    const fetchBrowse1 = async () => {
      try {
        const response = await fetch(
          "https://evento-a583e-default-rtdb.europe-west1.firebasedatabase.app/nightLife.json"
        );
        const data = await response.json();

        if (data) {
          const browseArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setBrowse1(browseArray);
        }
      } catch (error) {
        console.log("Error fetching favorites:", error);
      }
    };

    const fetchBrowse2 = async () => {
      try {
        const response = await fetch(
          "https://evento-a583e-default-rtdb.europe-west1.firebasedatabase.app/museum.json"
        );
        const data = await response.json();

        if (data) {
          const browseArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setBrowse2(browseArray);
        }
      } catch (error) {
        console.log("Error fetching favorites:", error);
      }
    };

    fetchBrowse();
    fetchBrowse1();
    fetchBrowse2();
  }, []);

  const renderBrowseItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} style={styles.Image} />
      <Card.Actions style={styles.cardText}>
        <Text style={styles.cardText}>{item.id}</Text>
      </Card.Actions>
      <Card.Actions style={styles.cardText}>
        <Text style={styles.cardText}>{item.description}</Text>
          </Card.Actions>
          <Card.Actions>
              <Text style={styles.cardText}>{item.address}</Text>
        </Card.Actions>
      <Card.Actions>
        <Button>Free</Button>
      </Card.Actions>
    </Card>
  );

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
          />
          
      <ScrollView
        contentContainerStyle={styles.scrollView}
        decelerationRate={UIScrollViewDecelerationRateFast}
        indicatorStyle="black"
        contentInset={{ top: OFFSET}} 
        contentOffset={{ y: OFFSET }}
      >
        <Text style={styles.text}>Upcoming</Text>
        <FlatList
          data={browse}
          renderItem={renderBrowseItem}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.flatlistContent}
        />
        <Text style={styles.text}>Night Life</Text>
        <FlatList
          data={browse1}
          renderItem={renderBrowseItem}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.flatlistContent}
        />
        <Text style={styles.text}>Museum</Text>
        <FlatList
          data={browse2}
          renderItem={renderBrowseItem}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.flatlistContent}
        />
        <Text style={styles.text}>Event you may like</Text>
        <FlatList
          data={browse1}
          renderItem={renderBrowseItem}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.flatlistContent}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  searchbar: {
    marginVertical: 10,
    marginHorizontal: 20,
    width: 400,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: "left",
  },
  flatlistContent: {
    paddingHorizontal: 20,
  },
  Image: {
    width: 300,
    height: 200,
  },
  text: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "flex-start",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
    fontFamily: "Cochin",
  },
  scrollView: {
    marginHorizontal: 10,
  },
});

export default MyComponent;
