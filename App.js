// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import Routes from "./src/config/routes";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar animated barStyle="dark-content" hidden animated />
        <Routes />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
