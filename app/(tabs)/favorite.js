import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Save() {
  const navigation = useNavigation();
  // const router = useRouter();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorites from Firebase
    const fetchFavorites = async () => {
      try {
        const response = await fetch(
          "https://evento-a583e-default-rtdb.europe-west1.firebasedatabase.app/favorites.json"
        );
        const data = await response.json();

        if (data) {
          const favoritesArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setFavorites(favoritesArray);
        }
      } catch (error) {
        console.log("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  const endpoint =
    "https://evento-a583e-default-rtdb.europe-west1.firebasedatabase.app";

  async function deleteFavorite(id) {
    try {
      Alert.alert("Favorite deleted");
      const response = await fetch(`${endpoint}/favorites/${id}.json`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the favorite from the local state
        setFavorites((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite.id !== id)
        );
      } else {
        console.log("Error deleting favorite:", response.status);
      }
    } catch (error) {
      console.log("Error deleting favorite:", error);
    }
  }

  const renderFavoriteItem = ({ item }) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
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
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => deleteFavorite(item.id)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
    fontFamily: "Cochin",
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: "left",
  },
});


// import {
//   View,
//   Image,
//   FlatList,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { useRouter } from "expo-router";
// import React, { useEffect, useState } from "react";
// import { Searchbar, Card, Text, DropDownPicker } from "react-native-paper";

// export default function Save() {
//   const router = useRouter();
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     // Fetch favorites from Firebase
//     const fetchFavorites = async () => {
//       try {
//         const response = await fetch(
//           "https://evento-a583e-default-rtdb.europe-west1.firebasedatabase.app/favorits.json"
//         );
//         const data = await response.json();

//         if (data) {
//           const favoritesArray = Object.keys(data).map((key) => ({
//             id: key,
//             ...data[key],
//           }));
//           setFavorites(favoritesArray);
//         }
//       } catch (error) {
//         console.log("Error fetching favorites:", error);
//       }
//     };

//     fetchFavorites();
//   }, []);

//   const endpoint =
//     "https://evento-a583e-default-rtdb.europe-west1.firebasedatabase.app";

//   async function deleteFavorite(id) {
//     try {
//       Alert.alert("Favorit deleted");
//       const response = await fetch(`${endpoint}/favorits/${id}.json`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         // Remove the favorite from the local state
//         setFavorites((prevFavorites) =>
//           prevFavorites.filter((favorite) => favorite.id !== id)
//         );
//         //Alert.alert("Favorite Deleted");
//       } else {
//         console.log("Error deleting favorite:", response.status);
//       }
//     } catch (error) {
//       console.log("Error deleting favorite:", error);
//     }
//   }

//   const renderFavoriteItem = ({ item }) => (
//     <View style={{ flexDirection: "row", alignItems: "center" }}>
//       <Card style={styles.card}>
//         <Card.Cover source={{ uri: item.image }} />
//         <Card.Actions>
//           <Text style={styles.cardText}>{item.id}</Text>
//         </Card.Actions>
//         <Card.Actions style={styles.cardText}>
//           <Text style={styles.cardText}>{item.description}</Text>
//         </Card.Actions>
//         <Card.Actions>
//           <Text style={styles.cardText}>{item.address}</Text>
//         </Card.Actions>
//         <Card.Actions></Card.Actions>
//         <TouchableOpacity
//           style={styles.buttonSignUp}
//           onPress={() => deleteFavorite(item.id)}
//         >
//           <Text>Delete</Text>
//         </TouchableOpacity>

//         {/* <View style={{ marginLeft: 10 }}>
//         <Text>{item.id}</Text>
//         <Text>{item.name}</Text>
//         <Text>{item.address}</Text>
//         <Text>{item.description}</Text>
//         <Button
//         title="Delete"
//         onPress={() => deleteFavorite(item.id)}
//         />
//       </View> */}
//       </Card>
//     </View>
//   );

//   return (
//     <View>
//       <FlatList
//         style={styles.container}
//         data={favorites}
//         renderItem={renderFavoriteItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
//   buttonSignUp: {
//     marginTop: 10,
//     backgroundColor: "#DDC3FF",
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//     width: 150,
//     height: 40,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "white",
//   },
//   cardText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     flex: 1,
//     textAlign: "left",
//     fontFamily: "Cochin",
//   },
//   card: {
//     marginVertical: 10,
//     marginHorizontal: 20,
//     textAlign: "left",
//   },
// });
