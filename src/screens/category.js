import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/header";
import StyledText from "../components/styledText";
import Colors from "../config/colors";

import CategoryCard from "../components/categoryCard";

export default function Category({ navigation }) {
  return (
    <View>
      <Header title="Category" navigation={navigation} />
      <ScrollView style={styles.container}>
        <StyledText style={styles.headerText}>Category</StyledText>
        <CategoryCard />
        <CategoryCard />

        <StyledText style={styles.headerText}>Brand</StyledText>
        <CategoryCard />
        <CategoryCard />

        <StyledText style={styles.headerText}>Vendor</StyledText>
        <CategoryCard />
        <CategoryCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headerText: {
    marginVertical: 10,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
