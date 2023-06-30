import { React, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

const createAlert = () => {
  Alert.alert("Stay Tuned!", "Thank you for subscribing to our newsletter", [
    { text: "OK", onPress: () => {} },
  ]);
};
export default function Newsletter() {
  const [email, onChangeEmail] = useState("");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", flexGrow: 1 }}
    >
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../src/img/littleLemonBackground.png")}
      />

      <Text style={styles.subText}>
        Subscribe to our NewsLetter for our Latest Delicious Recipes!
      </Text>

      <TextInput
        placeholder="example@email.com"
        keyboardType="email-address"
        value={email}
        onChange={onChangeEmail}
        style={styles.textInput}
      />

      <Pressable style={styles.button} onPress={createAlert}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 200,
  },

  subText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 40,
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    width: "100%",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    margin: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
