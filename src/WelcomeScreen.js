import react from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  useColorScheme,
  useWindowDimensions,
  Pressable,
} from "react-native";

export const WelcomeScreen = ({ navigation }) => {
  const orientation = useDeviceOrientation();
  const window = useWindowDimensions();
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#000" },
      ]}
    >
      {/* <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../src/img/littleLemonHeader.png")}
        accessible={true}
        accessibilityLabel="Little Lemon Header"
      /> */}
      {/* <Text style={styles.subTitle}>colorScheme: {colorScheme}</Text>
      <Text>Window Dimensions</Text>
      <Text>Height: {window.height}</Text>
      <Text>Width: {window.width}</Text>
      <Text>Font Scale: {window.fontScale}</Text>
      <Text>Is orientation portrait: {orientation.portrait}</Text>
      <Text>Is orientation landscape: {orientation.landscape}</Text> */}
      <Pressable onPress={() => navigation.navigate("Menu")}>
        {/* <Text>View Menu</Text> */}
      </Pressable>
      <Image
        style={styles.background}
        accesibility={true}
        accessibilityLabel="Background Image"
        resizeMode="contain"
        source={require("../src/img/littleLemonBackground.png")}
      />
        <Text style={styles.title}>Welcome to Little Lemon</Text>
        <Text style={styles.subTitle}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
     
      <Image
        resizeMode="cover"
        style={styles.foodImage}
        source={require("../src/img/Picture1.png")}
        accessible={true}
        accessibilityLabel="Food Picture 1"
      />
      <Image
        resizeMode="cover"
        style={styles.foodImage}
        source={require("../src/img/Picture2.png")}
        accessible={true}
        accessibilityLabel="Food Picture 2"
      />
      <Image
        resizeMode="cover"
        style={styles.foodImage}
        source={require("../src/img/Picture3.png")}
        accessible={true}
        accessibilityLabel="Food Picture 3"
      />
      <Image
        resizeMode="cover"
        style={styles.foodImage}
        source={require("../src/img/Picture4.png")}
        accessible={true}
        accessibilityLabel="Food Picture 4"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width:250,
    height:300,
    borderRadius: 20,
    
  },
  title: {
    padding: 30,
    color: "#EDEFEE",
    fontSize: 40,
    textAlign: "center",
  },
  subTitle: {
    padding: 30,
    color: "#EDEFEE",
    fontSize: 36,
    textAlign: "center",
  },
  logo: {
    width: 300,
    height: 100,
    margin: 10,
  },
  foodImage: {
    width: 350,
    height: 250,
    borderRadius: 10,
  },
});
