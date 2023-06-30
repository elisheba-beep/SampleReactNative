import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerTitle}>Little Lemon</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: { alignItems: "center", backgroundColor: "#EE9972" },
  headerTitle: { fontSize: 30, fontWeight: "bold", padding: 20 },
});
