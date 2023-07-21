import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, Stack, useRouter } from "expo-router";

export default function SignIn() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const auth = getAuth();

  const handleAcceptance = () => {
    setAccepted(!accepted);
  };

  function handleSignIn() {
    let isValid = true;
 if (
      mail === "" ||
      !mail.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setMessage("Please enter a valid email address");
      isValid = false;
    } else if (
      password === "" ||
      password.length < 8 ||
      password.length > 12 ||
      !password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)
    ) {
      setMessage(
        "Password must be between 8 and 12 characters long and contain at least one special character"
      );
      isValid = false;
    } else {
      setMessage("Sign up successful");
    }

    if (isValid) {
      router.push("/evento");
    }
  }
    
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="lightgrey" />
      </TouchableOpacity>
      <Text style={styles.heading}>Log in</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMail}
        value={mail}
        placeholder="Enter your email address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSignIn}>
          <Text style={styles.title}>Log In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    marginBottom: 50,
  },
  input: {
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    marginVertical: 15,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#f5f5f5",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  heading: {
    marginTop: 70,
    textAlign: "center",
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 20,
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
