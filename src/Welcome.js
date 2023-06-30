import React, { useState } from "react";
import { Image, Pressable, View, StyleSheet, Text } from "react-native";

export default function Welcome({ navigation }) {
  const [newsLetter, setNewsletter] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.title}>LITTLE</Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../src/img/littleLemonBackground.png")}
        />
        <Text style={styles.title}>LEMON</Text>
      </View>

      <Text style={styles.subText}>
        Little Lemon, your local Mediterrian Bistro
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("NewsLetter")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  logo: {
    alignItems: "center",
    margin: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    color: "green",
    fontWeight: "bold",
    fontSize: 30,
  },
  subText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
