// import * as React from "react";
// import { StyleSheet, View, Text, Pressable } from "react-native";
// import { Image } from "expo-image";
// import { useNavigation } from "@react-navigation/native";


// const EventCard = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.eventCard}>
//       <View style={[styles.footer, styles.footerLayout]}>
//         <View style={styles.footerChild} />
//         <View style={[styles.icons, styles.vectorParentFlexBox]}>
//           <Pressable
//             style={styles.vectorParentFlexBox}
//             onPress={() => navigation.navigate("HP")}
//           >
//             <Image
//               style={styles.iconEye}
//               contentFit="cover"
//               source={require("../Assets/-icon-eye.png")}
//             />
//             <Text style={[styles.browse1, styles.browse1Typo]}>Browse</Text>
//           </Pressable>
//           <Pressable
//             style={[styles.map, styles.vectorParentFlexBox]}
//             onPress={() => navigation.navigate("Map")}
//           >
//             <Image
//               style={styles.iconMap1}
//               contentFit="cover"
//               source={require("../Assets/-icon-map-1.png")}
//             />
//             <Text style={[styles.discover, styles.browse1Typo]}>Discover</Text>
//           </Pressable>
//           <Pressable
//             style={[styles.map, styles.vectorParentFlexBox]}
//             onPress={() => navigation.navigate("Fav")}
//           >
//             <Image
//               style={styles.iconMap1}
//               contentFit="cover"
//               source={require("../Assets/-icon-heart.png")}
//             />
//             <Text style={[styles.discover, styles.browse1Typo]}>Favourite</Text>
//           </Pressable>
//           <Pressable
//             style={[styles.map, styles.vectorParentFlexBox]}
//             onPress={() => navigation.navigate("Me")}
//           >
//             <Image
//               style={styles.iconProfileCircle}
//               contentFit="cover"
//               source={require("../Assets/-icon-profile-circle.png")}
//             />
//             <Text style={[styles.discover, styles.browse1Typo]}>Me</Text>
//           </Pressable>
//         </View>
//       </View>
//       <Image
//         style={[styles.eventCardChild, styles.childPosition]}
//         contentFit="cover"
//         source={require("../Assets/rectangle-815.png")}
//       />
//       <Image
//         style={styles.eventCardItem}
//         contentFit="cover"
//         source={require("../Assets/ellipse-21.png")}
//       />
//       <Text style={styles.pubQuiz}>Pub Quiz</Text>
//       <Image
//         style={[styles.heartIcon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../Aassets/heart6.png")}
//       />
//       <Image
//         style={[styles.shareIcon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../Assets/share.png")}
//       />
//       <Image
//         style={[styles.backIcon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../Assets/back.png")}
//       />
//       <View style={styles.freeParent}>
//         <Text style={[styles.free, styles.freeTypo]}>Free</Text>
//         <View style={[styles.frameChild, styles.frameLayout]} />
//         <View style={[styles.frameItem, styles.frameLayout]} />
//         <View style={[styles.frameInner, styles.frameLayout]} />
//         <Image
//           style={[styles.lineIcon, styles.footerLayout]}
//           contentFit="cover"
//           source={require("../Assets/line-5.png")}
//         />
//         <Text style={[styles.whatOthersAre, styles.whatTypo]}>
//           What others are thinking?
//         </Text>
//         <View style={[styles.vectorParent, styles.vectorParentFlexBox]}>
//           <Image
//             style={styles.vectorIconLayout}
//             contentFit="cover"
//             source={require("../Assets/vector6.png")}
//           />
//           <Text style={[styles.vestergade388000, styles.text3Typo]}>
//             Vestergade 38, 8000 Aarhus
//           </Text>
//         </View>
//         <Text style={[styles.discription, styles.whatTypo]}>Discription</Text>
//         <Text
//           style={styles.toremIpsumDolor}
//         >{`Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 

// Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
// `}</Text>
//         <View style={[styles.map1, styles.mapLayout]}>
//           <View style={[styles.mapChild, styles.mapLayout]} />
//           <Image
//             style={[styles.vectorIcon1, styles.vectorIconLayout]}
//             contentFit="cover"
//             source={require("../Assets/vector7.png")}
//           />
//         </View>
//         <Text style={[styles.findUs, styles.whatTypo]}>Find Us</Text>
//         <Text style={[styles.whatDoYou, styles.whatTypo]}>
//           What do you think?
//         </Text>
//         <View style={[styles.vectorGroup, styles.vectorParentFlexBox]}>
//           <Image
//             style={styles.vectorIcon2}
//             contentFit="cover"
//             source={require("../Assets/vector8.png")}
//           />
//           <Text style={[styles.text, styles.textFlexBox]}>
//             <Text style={styles.text1}>4.5</Text>
//             <Text style={styles.text2}>/5</Text>
//           </Text>
//         </View>
//         <Text style={[styles.top3Highlights, styles.whatTypo]}>
//           Top 3 highlights
//         </Text>
//         <View style={[styles.bestAtmosphereParent, styles.vectorParentFlexBox]}>
//           <Text style={[styles.bestAtmosphere, styles.whatTypo]}>
//             Best Atmosphere
//           </Text>
//           <Text style={[styles.greatReviews, styles.whatTypo]}>
//             Great Reviews
//           </Text>
//           <Text style={[styles.greatReviews, styles.whatTypo]}>
//             Best in: Bars
//           </Text>
//         </View>
//         <Text style={[styles.haveYouBeen, styles.textFlexBox]}>
//           Have you been to this place? Add your own review?
//         </Text>
//         <Pressable
//           style={[styles.signUp, styles.signLayout]}
//           onPress={() => navigation.navigate("Welcome")}
//         >
//           <View style={[styles.signUpChild, styles.signLayout]} />
//           <Text style={[styles.review, styles.freeTypo]}>Review</Text>
//         </Pressable>
//         <View style={styles.frameParent}>
//           <View style={[styles.vectorContainer, styles.vectorParentFlexBox]}>
//             <Image
//               style={styles.vectorIcon3}
//               contentFit="cover"
//               source={require("../Assets/vector9.png")}
//             />
//             <Text style={[styles.barThreeCrows, styles.text3Typo]}>
//               Bar Three Crows
//             </Text>
//           </View>
//           <View style={[styles.frameView, styles.vectorParentFlexBox]}>
//             <Image
//               style={styles.vectorIcon4}
//               contentFit="cover"
//               source={require("../Assets/vector10.png")}
//             />
//             <Text style={[styles.text3, styles.text3Typo]}>4.5</Text>
//           </View>
//           <View style={[styles.frameView, styles.vectorParentFlexBox]}>
//             <Image
//               style={styles.groupIcon}
//               contentFit="cover"
//               source={require("../Assets/group1.png")}
//             />
//             <Text style={[styles.text3, styles.text3Typo]}>5.07.23</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   footerLayout: {
//     width: 390,
//     position: "absolute",
//   },
//   vectorParentFlexBox: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   browse1Typo: {
//     marginTop: 5,
//     textAlign: "left",
//     fontSize: FontSize.text_size,
//   },
//   childPosition: {
//     borderRadius: Border.br_8xs,
//     left: 0,
//     top: 0,
//   },
//   iconLayout: {
//     height: 40,
//     width: 40,
//     top: 24,
//     position: "absolute",
//   },
//   freeTypo: {
//     textAlign: "center",
//     fontFamily: FontFamily.h1,
//     fontWeight: "700",
//     position: "absolute",
//   },
//   frameLayout: {
//     height: 1,
//     borderTopWidth: 1,
//     borderColor: "#f2e3bd",
//     borderStyle: "solid",
//     width: 391,
//     left: 0,
//     position: "absolute",
//   },
//   whatTypo: {
//     fontSize: FontSize.h1_size,
//     textAlign: "left",
//   },
//   text3Typo: {
//     marginLeft: 6,
//     fontSize: FontSize.h1_size,
//     color: Color.black,
//     textAlign: "left",
//   },
//   mapLayout: {
//     height: 136,
//     width: 329,
//     position: "absolute",
//   },
//   vectorIconLayout: {
//     height: 27,
//     width: 23,
//   },
//   textFlexBox: {
//     textAlign: "left",
//     color: Color.black,
//   },
//   signLayout: {
//     height: 39,
//     width: 159,
//     position: "absolute",
//   },
//   footerChild: {
//     height: "100%",
//     top: "0%",
//     right: "0%",
//     bottom: "0%",
//     left: "0%",
//     backgroundColor: Color.lila,
//     position: "absolute",
//     width: "100%",
//   },
//   iconEye: {
//     height: 22,
//     width: 26,
//   },
//   browse1: {
//     color: Color.white,
//     marginTop: 5,
//     fontFamily: FontFamily.interSemibold,
//     fontWeight: "600",
//   },
//   iconMap1: {
//     height: 23,
//     width: 26,
//   },
//   discover: {
//     color: Color.black,
//     fontFamily: FontFamily.text,
//   },
//   map: {
//     marginLeft: 52,
//   },
//   iconProfileCircle: {
//     width: 24,
//     height: 24,
//   },
//   icons: {
//     height: "52.87%",
//     width: "83.82%",
//     top: "24.1%",
//     right: "8.11%",
//     bottom: "23.04%",
//     left: "8.08%",
//     flexDirection: "row",
//     alignItems: "center",
//     position: "absolute",
//   },
//   footer: {
//     marginLeft: -195,
//     bottom: 0,
//     shadowColor: "rgba(0, 0, 0, 0.2)",
//     shadowOffset: {
//       width: 0,
//       height: -3,
//     },
//     shadowRadius: 4,
//     elevation: 4,
//     shadowOpacity: 1,
//     height: 83,
//     left: "50%",
//     overflow: "hidden",
//   },
//   eventCardChild: {
//     height: 216,
//     width: 390,
//     position: "absolute",
//   },
//   eventCardItem: {
//     top: 127,
//     width: 65,
//     height: 65,
//     left: 31,
//     position: "absolute",
//   },
//   pubQuiz: {
//     marginLeft: -79,
//     top: 151,
//     fontFamily: FontFamily.h1,
//     fontWeight: "700",
//     fontSize: FontSize.size_xl,
//     textAlign: "left",
//     color: Color.white,
//     left: "50%",
//     position: "absolute",
//   },
//   heartIcon: {
//     left: 328,
//   },
//   shareIcon: {
//     left: 275,
//   },
//   backIcon: {
//     left: 15,
//   },
//   free: {
//     top: 13,
//     left: 315,
//     width: 48,
//     height: 18,
//     color: Color.orange,
//     fontSize: FontSize.size_xl,
//   },
//   frameChild: {
//     top: 116,
//   },
//   frameItem: {
//     top: 174,
//   },
//   frameInner: {
//     top: 697,
//   },
//   lineIcon: {
//     top: 960,
//     left: 1,
//     height: 0,
//   },
//   whatOthersAre: {
//     marginLeft: -85.5,
//     top: 718,
//     color: Color.black,
//     fontFamily: FontFamily.interSemibold,
//     fontWeight: "600",
//     left: "50%",
//     position: "absolute",
//   },
//   vestergade388000: {
//     height: 19,
//     width: 233,
//     marginLeft: 6,
//     fontFamily: FontFamily.text,
//   },
//   vectorParent: {
//     top: 131,
//     left: 31,
//     flexDirection: "row",
//     alignItems: "center",
//     position: "absolute",
//   },
//   discription: {
//     top: 198,
//     left: 31,
//     color: Color.black,
//     fontFamily: FontFamily.interSemibold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   toremIpsumDolor: {
//     top: 239,
//     height: 214,
//     width: 329,
//     left: 31,
//     color: Color.black,
//     fontFamily: FontFamily.text,
//     textAlign: "left",
//     fontSize: FontSize.text_size,
//     position: "absolute",
//   },
//   mapChild: {
//     backgroundColor: "#d9d9d9",
//     borderRadius: Border.br_8xs,
//     left: 0,
//     top: 0,
//   },
//   vectorIcon1: {
//     top: 54,
//     left: 152,
//     position: "absolute",
//   },
//   map1: {
//     top: 527,
//     left: 31,
//   },
//   findUs: {
//     top: 485,
//     left: 31,
//     color: Color.black,
//     fontFamily: FontFamily.interSemibold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   whatDoYou: {
//     top: 986,
//     left: 31,
//     color: Color.black,
//     fontFamily: FontFamily.interSemibold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   vectorIcon2: {
//     width: 37,
//     height: 35,
//   },
//   text1: {
//     letterSpacing: "8%",
//   },
//   text2: {
//     letterSpacing: "12%",
//   },
//   text: {
//     width: 67,
//     marginLeft: 14,
//     fontSize: FontSize.size_xl,
//     color: Color.black,
//     fontFamily: FontFamily.interSemibold,
//     fontWeight: "600",
//   },
//   vectorGroup: {
//     marginLeft: -59.5,
//     top: 753,
//     flexDirection: "row",
//     alignItems: "center",
//     left: "50%",
//     position: "absolute",
//   },
//   top3Highlights: {
//     top: 811,
//     left: 138,
//     color: Color.black,
//     fontFamily: FontFamily.text,
//     position: "absolute",
//   },
//   bestAtmosphere: {
//     color: Color.orange,
//     fontFamily: FontFamily.text,
//   },
//   greatReviews: {
//     marginTop: 20,
//     color: Color.orange,
//     fontFamily: FontFamily.text,
//   },
//   bestAtmosphereParent: {
//     marginLeft: -56.5,
//     top: 848,
//     left: "50%",
//     position: "absolute",
//   },
//   haveYouBeen: {
//     top: 1019,
//     left: 26,
//     color: Color.black,
//     fontFamily: FontFamily.text,
//     fontSize: FontSize.text_size,
//     position: "absolute",
//   },
//   signUpChild: {
//     borderRadius: Border.br_3xs,
//     borderColor: "#8636c6",
//     borderWidth: 1,
//     borderStyle: "solid",
//     height: 39,
//     width: 159,
//     left: 0,
//     top: 0,
//   },
//   review: {
//     top: 12,
//     left: 44,
//     color: Color.purple,
//     width: 70,
//     height: 15,
//     fontSize: FontSize.text_size,
//   },
//   signUp: {
//     top: 1060,
//     left: 116,
//   },
//   vectorIcon3: {
//     height: 26,
//     width: 23,
//   },
//   barThreeCrows: {
//     height: 19,
//     width: 233,
//     marginLeft: 6,
//     fontFamily: FontFamily.interSemibold,
//     fontWeight: "600",
//   },
//   vectorContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   vectorIcon4: {
//     width: 23,
//     height: 22,
//   },
//   text3: {
//     fontFamily: FontFamily.text,
//   },
//   frameView: {
//     marginTop: 9,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   groupIcon: {
//     width: 23,
//     height: 23,
//   },
//   frameParent: {
//     top: 9,
//     left: 32,
//     position: "absolute",
//   },
//   freeParent: {
//     top: 227,
//     height: 511,
//     width: 391,
//     left: 0,
//     position: "absolute",
//   },
//   eventCard: {
//     backgroundColor: Color.white,
//     flex: 1,
//     height: 844,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

// export default EventCard;
