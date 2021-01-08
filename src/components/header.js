import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import StyledText from "./styledText";

export default function Header({ navigation, title }) {
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>{title}</StyledText>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../assets/icons/backArrow.png")} />
        <StyledText style={styles.backButtonText}>Back</StyledText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backButtonContainer: {
    position: "absolute",
    left: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
  backButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    marginLeft: 5,
  },
});
