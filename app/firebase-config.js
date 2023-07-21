import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKWdwc3CdNuRaYgDpygI2Jj-0FQbzV9WI",
  authDomain: "expo-post-app.firebaseapp.com",
  databaseURL:
    "https://react-native-wl-default-rtdb.europe-west1.firebasedatabase",
  projectId: "expo-post-app",
  storageBucket: "expo-post-app.appspot.com",
  messagingSenderId: "585666076188",
  appId: "1:585666076188:web:2d11018cf35a20aaa3c9d9",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
