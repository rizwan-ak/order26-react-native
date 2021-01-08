import React from "react";
import { StyleSheet, View, Image, Switch } from "react-native";
import StyledText from "../components/styledText";
import Colors from "../config/colors";

export default function CategoryCard() {
  return (
    <View style={styles.catrgoryContainer}>
      <Image source={require("../assets/logo.png")} style={styles.icon} />
      <StyledText style={styles.categoryTitle}>Category</StyledText>
      <Switch
        trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
        thumbColor={Colors.primary}
        // ios_backgroundColor="#3e3e3e"
        // onValueChange={toggleSwitch}
        value={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  catrgoryContainer: {
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingRight: 10,
  },
  icon: {
    borderRadius: 10,
    height: 60,
    width: 60,
  },
  categoryTitle: {
    marginLeft: 20,
    color: "black",
    fontSize: 14,
    flex: 1,
  },
});
