import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function Evento() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
              <Text style={styles.title}>Welcome !</Text>
              {/* <Text >Evento page here</Text> */}
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => router.push("/(tabs)/browse")}
        >
          <Text style={styles.subTitle}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    color: "#38434D",
  },

  buttonSignUp: {
    marginTop: 35,
    backgroundColor: "#DDC3FF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
