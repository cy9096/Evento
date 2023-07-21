import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, Stack, useRouter } from "expo-router";
import { TabActions } from "@react-navigation/native";

export default function SignUp() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleAcceptance = () => {
    setAccepted(!accepted);
  };

  function handleSignIn() {
    let isValid = true;

    if (name === "" && name.length < 2) {
      setMessage("Name must be at least 2 characters long");
      isValid = false;
    } else if (
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
      password.length > 12
    ) {
      setMessage(
        "Password must be between 8 and 12 characters long"
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

      <Text style={styles.heading}>Sign Up</Text>

      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="User name"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        onChangeText={setMail}
        value={mail}
        placeholder="Email"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Text style={styles.errorMessage}>{message}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSignUp} onPress={handleSignIn}>
          <Text style={styles.title}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
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
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
  },
  heading: {
    marginTop: 70,
    alignItems: "center",
    textAlign: "center",
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 20,
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Button,
// } from "react-native";

// export default function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [accepted, setAccepted] = useState(false);

//   const handleAcceptance = () => {
//     setAccepted(!accepted);
//   };

//   const handleSignUp = () => {
//     // Perform sign-up logic here
//     console.log("Signing up...");
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Reset form fields
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="User name"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="name-phone-pad"
//         autoCapitalize="none"
//         autoFocus
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Repeat Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//         autoCapitalize="none"
//         autoCompleteType="password"
//         textContentType="password"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Repeat Password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//         autoCapitalize="none"
//         autoCompleteType="password"
//         textContentType="password"
//       />

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleSignUp}
//         disabled={!accepted}
//       >
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     alignContent: "center",
//     textAlign: "center",
//     width: "100%",
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 4,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     width: "50%",
//     height: 40,
//     backgroundColor: "lavender",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 4,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
