import React from "react";
import { StyleSheet, View, Image, Switch } from "react-native";
import StyledText from "../components/styledText";
import Colors from "../config/colors";

export default function EmployeesCard({ employee, update }) {
  const {
    cellPhone,
    email,
    fullName,
    isActive,
    profilePicture,
    contactId,
  } = employee;
  return (
    <View style={styles.container}>
      <Image
        source={
          profilePicture
            ? { uri: `${profilePicture}` }
            : require("../assets/logo.png")
        }
        style={styles.icon}
      />
      <View style={styles.body}>
        <StyledText style={styles.title}>{fullName}</StyledText>
        <StyledText style={styles.bodyText}>{email}</StyledText>
        <StyledText style={styles.bodyText}>00{cellPhone}</StyledText>
      </View>
      {/* <View style={isActive ? styles.activeTick : styles.inactiveTick}>
        <Image
          source={require("../assets/icons/tick.png")}
          style={styles.tickIcon}
        />
      </View> */}
      <Switch
        trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
        thumbColor={Colors.primary}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={() =>
          update({ contactId, isActive: isActive === "True" ? false : true })
        }
        value={isActive === "True"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
  },
  icon: {
    borderRadius: 50,
    height: 75,
    width: 75,
  },
  body: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  bodyText: {
    marginTop: 5,
    fontSize: 12,
    color: "#707070",
  },
  activeTick: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 20,
    width: 20,
    backgroundColor: Colors.primary,
  },
  inactiveTick: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 20,
    width: 20,
    backgroundColor: Colors.secondary,
  },
  tickIcon: {
    height: 10,
    width: 15,
  },
});
