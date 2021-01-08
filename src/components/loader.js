import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import Colors from "../config/colors";

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 5,
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
