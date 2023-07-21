import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {

  let isClicked = true;
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#DDC3FF",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
          headerShown: false,
          tabBarActiveTintColor: "white", //text color
          tabBarInactiveTintColor: "black",
          tabBarActiveBackgroundColor: "#DDC3FF",
          tabBarIcon: () => <Ionicons name="eye" size={30} color="black" />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          headerShown: false,
          tabBarActiveTintColor: "white", //text color
          tabBarInactiveTintColor: "black",
          tabBarActiveBackgroundColor: "#DDC3FF",
          tabBarIcon: () => (
            <Ionicons name="map" size={30} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Your Favorites",
          headerTitleAlign: "left",
          tabBarActiveTintColor: "white", //text color
          tabBarInactiveTintColor: "black",
          tabBarActiveBackgroundColor: "#DDC3FF",
          tabBarIcon: () => (
            <Ionicons
              name= "heart-outline"
              size={30}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Account",
          headerShown: true,
          headerTitleAlign: "left",
          tabBarActiveTintColor: "white", //text color
          tabBarInactiveTintColor: "black",
          tabBarActiveBackgroundColor: "#DDC3FF",
          tabBarIcon: () => (
            <Ionicons name="person-circle" size={30} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
