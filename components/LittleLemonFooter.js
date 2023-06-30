import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.footerText}>
        All Rights Reserved by Little Lemon, 2023
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    marginBottom: 10,
  },
  footerText: { fontSize: 18, fontWeight: "bold", padding: 10 },
});
