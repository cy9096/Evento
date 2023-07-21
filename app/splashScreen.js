import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SplashScreen from "react-native-splash-screen";

const SplashScreenApp = () => {
  useEffect(() => {
    if (SplashScreen) {
      SplashScreen.hide();
    }
  }, []);
  return (
    <View style={styles.container}>
          <View style={styles.main}>
              {/* <Image source={require('../assets/logo2.png')} /> */}
        <Text style={styles.title}>Welcome</Text>
        <Button
          title="Join"
          onPress={() => {
            router.push("/user/log-in");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
      fontWeight: "bold",
    color: "black"
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

export default SplashScreenApp;
