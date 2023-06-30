import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SectionList,
  Pressable,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue</Text>
    {isLoggedIn && <Text style={styles.headerText}>You are logged in!</Text>}
    {!isLoggedIn && <View>
    <TextInput
        placeholder="email"
        style={styles.textInput}
        keyboardType="email-address"
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        placeholder="password"
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={onChangePassword}
        value={password}
      />
      <Pressable
        onPress={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
        style={styles.loginButton}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
      </View>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  loginButton: {
    backgroundColor: '#EE9972',
    margin:100,
    marginVertical: 8,
    borderRadius: 50,
    borderWidth: 2,
    padding:10,
    
  },
  buttonText:{
    fontSize: 24,
    textAlign: 'center',
  }
});
