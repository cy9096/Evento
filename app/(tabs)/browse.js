import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Detail from "../(detail)/detail";

export default function Evento() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Detail />
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
});

// import { StyleSheet, View, styles } from "react-native";
// import { useRouter } from "expo-router";
// import SplashScreenApp from "../splashScreen";

// export default function Discover() {
//   const router = useRouter();
//   return (
//     <View>
//       <SplashScreenApp />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
// import React, { useEffect, useRef, useState } from "react";
// import { Animated, StyleSheet } from "react-native";

// export const Splash = ({ isAppReady }) => {
//   const containerOpacity = useRef(new Animated.Value(1)).current;
//   const imageOpacity = useRef(new Animated.Value(0)).current;

//   const [state, setState] = useState(LOADING_IMAGE);

//   useEffect(() => {
//     if (state === LOADING_IMAGE) {
//       Animated.timing(imageOpacity, {
//         toValue: 1,
//         duration: 1000, // Fade in duration
//         useNativeDriver: true,
//       }).start(() => {
//         setState(FADE_IN_IMAGE);
//       });
//     }
//   }, [imageOpacity, state]);

//   useEffect(() => {
//     if (state === FADE_IN_IMAGE) {
//       if (isAppReady) {
//         setState(WAIT_FOR_APP_TO_BE_READY);
//       }
//     }
//   }, [isAppReady, state]);

//   useEffect(() => {
//     if (state === WAIT_FOR_APP_TO_BE_READY) {
//       Animated.timing(containerOpacity, {
//         toValue: 0,
//         duration: 1000, // Fade out duration
//         delay: 1000, // Minimum time the logo will stay visible
//         useNativeDriver: true,
//       }).start(() => {
//         setState(FADE_OUT);
//       });
//     }
//   }, [containerOpacity, state]);

//   if (state === FADE_OUT || state === HIDDEN) return null;

//   return (
//     <Animated.View
//       collapsable={false}
//       style={[styles.container, { opacity: containerOpacity }]}
//     >
//       <Animated.Image
//         source={require("../assets/logo2.png")}
//         fadeDuration={0}
//         onLoad={() => {
//           setState(LOADING_IMAGE);
//         }}
//         style={[styles.image, { opacity: imageOpacity }]}
//         resizeMode="contain"
//       />
//     </Animated.View>
//   );
// };

// export function AppEntry() {
//   const store = useRef(undefined);
//   const queryClient = useRef(undefined);

//   const [isAppReady, setIsAppReady] = useState(false);

//   useEffect(() => {
//     initialize().then((context) => {
//       store.current = context.store;
//       queryClient.current = context.queryClient;

//       setIsAppReady(true);
//     });
//   }, []);

//   return (
//     <WithSplashScreen isAppReady={isAppReady}>
//       {/* Add the necessary providers and components */}
//     </WithSplashScreen>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });

// import React, { useEffect } from "react";
// import { StyleSheet, Image, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const SplashScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     // Simulating a delay of 2 seconds
//     setTimeout(() => {
//       // Navigate to the desired screen after the delay
//       navigation.replace("Home"); // Replace "Home" with the screen you want to navigate to
//     }, 2000);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.logo}
//         source={require("../assets/logo2.png")}
//         resizeMode="contain"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   logo: {
//     width: 150,
//     height: 150,
//   },
// });

// export default SplashScreen;

// import React, { Component } from "react";
// import {
//   View,
//   StyleSheet,
//   Animated,
//   TouchableOpacity,
//   Image,
//   Text,
//   Button,
// } from "react-native";
// import { useRouter, router } from "expo-router";

// export default class Evento extends Component {

//    router = useRouter();

//   constructor(props) {
//     super(props);
//     this.state = {
//       showText: false,
//     };
//   }

//   componentWillMount = () => {
//     this.animatedWidth = new Animated.Value(100);
//     this.animatedHeight = new Animated.Value(100);
//   };

//   animatedBox = () => {
//     Animated.timing(this.animatedWidth, {
//       toValue: 60,
//       duration: 500,
//     }).start();
//     Animated.timing(this.animatedHeight, {
//       toValue: 60,
//       duration: 500,
//     }).start(() => {
//       this.setState({ showText: true });
//     });
//   };

//   render() {
//     const { showText } = this.state;
//     const animatedStyle = {
//       height: this.animatedHeight,
//       width: this.animatedWidth,
//     };

//     return (
//       <TouchableOpacity style={styles.container} onPress={this.animatedBox}>
//         <Animated.Image
//           style={[styles.image, animatedStyle]}
//           source={require("../assets/logo2.png")}
//         />
//         {showText && (
//           <View style={styles.textContainer}>
//             <Text style={styles.text}>Evento</Text>
//             <Button
//               title={"Log In"}
//               onPress={() => {
//                 router.push("/user/login");
//               }}
//             />
//             <Button
//               title={"Sign Up"}
//               onPress={() => {
//                 router.push("/user/sign-up");
//               }}
//             />
//           </View>
//         )}
//       </TouchableOpacity>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: 400,
//     height: 400,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
// });

// import React, { Component } from "react";
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   Animated,
//   TouchableOpacity,
//   Easing,
//   View,
// } from "react-native";

// export default class AnimationRotateScene extends Component {
//   constructor(props) {
//     super(props);
//     this.spinValue = new Animated.Value(0);
//   }

//   componentDidMount() {
//     this.spin();
//   }

//   spin() {
//     this.spinValue.setValue(0);
//     Animated.timing(this.spinValue, {
//       toValue: 1,
//       duration: 4000,
//       easing: Easing.linear,
//       useNativeDriver: true,
//     }).start(() => this.spin());
//   }

//   render() {
//     const spin = this.spinValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: ["0deg", "360deg"],
//     });

//     return (
//       <View style={styles.container}>
//         <Animated.Image
//           style={{
//             width: 227,
//             height: 200,
//             transform: [{ rotate: spin }],
//           }}
//           source={require("../assets/logo2.png")}

//         />
//         <TouchableOpacity onPress={() => this.spin()} style={styles.button}>
//           <Text>Start Animation</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "#808080",
//     // height: 35,
//     // width: 140,
//     borderRadius: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   Button,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { useRouter } from "expo-router";

// export default function Evento() {
//   const router = useRouter();
//   const [imageHovered, setImageHovered] = useState(false);

//   const handleImagePressIn = () => {
//     setImageHovered(true);
//   };

//   const handleImagePressOut = () => {
//     setImageHovered(false);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <TouchableWithoutFeedback
//           onPressIn={handleImagePressIn}
//           onPressOut={handleImagePressOut}
//           onPress={() => {
//             router.push("/user/login");
//           }}
//         >
//           <Image
//             source={require("../assets/logo2.png")}
//             style={[styles.logo, imageHovered && styles.logoHovered]}
//           />
//         </TouchableWithoutFeedback>
//         <Text style={styles.title}>Evento</Text>

//         <Button
//           title={"Log In"}
//           onPress={() => {
//             router.push("/user/login");
//           }}
//         />
//         <Button
//           title={"Sign Up"}
//           onPress={() => {
//             router.push("/user/sign-up");
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 32,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
//   logo: {
//     width: 200,
//     height: 200,
//   },
//   logoHovered: {
//     transform: [{ scale: 1.1 }],
//   },
// });

// import { StyleSheet, Text, View, Button, Image} from "react-native";
// import { useRouter } from "expo-router";

// import { Link} from "expo-router";

// export default function Page() {
//   const router = useRouter();
//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         {/* <Text style={styles.title}>Hello World</Text>
//         <Text style={styles.subtitle}>This is the first page of your app.</Text> */}
//         <Image source={require("../assets/logo2.png")} style={styles.logo} />

//         <Button
//           title={"Sign Up"}
//           onPress={() => {
//             router.push("/sign-up");
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
