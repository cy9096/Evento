import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { View } from "react-native";
import Map from "../(map)/map";

export default function Discover() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
