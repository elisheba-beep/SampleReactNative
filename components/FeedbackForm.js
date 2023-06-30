import React from "react";
import { ScrollView, TextInput, Text, StyleSheet } from "react-native";

export const FeedbackForm = () => {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [message, onChangeMessage] = React.useState("");
  return (
    <ScrollView style={formStyles.container} keyboardDismissMode="on-drag">
      <Text style={formStyles.headingSection}>
        How was your visit to Little Lemon?
      </Text>
      <Text style={formStyles.infoSection}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <TextInput
        style={formStyles.input}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder="firstname"
      />
      <TextInput
        style={formStyles.input}
        value={lastName}
        onChangeText={onChangeLastName}
        placeholder="lastname"

      />
      <TextInput
        style={formStyles.input}
        value={message}
        onChangeText={onChangeMessage}
        placeholder="message"
      />
    </ScrollView>
  );
};

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});
