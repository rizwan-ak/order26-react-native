import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Colors from "../config/colors";

export default function MyTabs() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/icons/home.png")} style={styles.icon} />
      <Image source={require("../assets/icons/qr.png")} style={styles.icon} />
      <Image
        source={require("../assets/icons/settings.png")}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // bottom: 0,
    // width: "100%",
    paddingHorizontal: 30,
    height: 60,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
