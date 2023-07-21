import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  Text,
  Button,
} from "react-native";
import { useRouter, router } from "expo-router";

export default class Welcome extends Component {
  router = useRouter();

  constructor(props) {
    super(props);
    this.state = {
      showText: false,
    };
  }

  componentWillMount = () => {
    this.animatedWidth = new Animated.Value(100);
    this.animatedHeight = new Animated.Value(100);
  };

  animatedBox = () => {
    Animated.timing(this.animatedWidth, {
      toValue: 100,
      duration: 500,
    }).start();
    Animated.timing(this.animatedHeight, {
      toValue: 100,
      duration: 500,
    }).start(() => {
      this.setState({ showText: true });
    });
  };

  render() {
    const { showText } = this.state;
    const animatedStyle = {
      height: this.animatedHeight,
      width: this.animatedWidth,
    };

    return (
      <TouchableOpacity style={styles.container} onPress={this.animatedBox}>
        <Animated.Image
          style={[styles.image, animatedStyle]}
          source={require("../assets/logo2.png")}
        />

        {showText && (
          <View style={styles.textContainer}>
            <Text style={styles.text}>Evento</Text>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={() => router.push("/user/login")}
            >
              <Text style={styles.title}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSignUp}
              onPress={() => router.push("/user/sign-up")}
            >
              <Text style={styles.title}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
        {/* <TouchableOpacity onPress={() => router.push("/evento")}>
          <Ionicons name="arrow-back" size={24} color="lightgrey" />
        </TouchableOpacity> */}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 500,
    height: 500,
  },
  textContainer: {
    marginTop: 20,
    alignItems: "center",
    color: "grey",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonLogin: {
    marginTop: 20,
    backgroundColor: "#F2E3BD",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 35,
    marginBottom: 10,
  },
  buttonSignUp: {
    marginTop: 5,
    backgroundColor: "#DDC3FF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 35,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
