import React from "react";
import { StyleSheet, View, Image } from "react-native";
import StyledText from "../components/styledText";
import Colors from "../config/colors";

export default function OrderCard({ order }) {
  const {
    invoiceAmount,
    orderDate,
    orderLine,
    orderNumber,
    orderStatus,
  } = order;
  return (
    <View style={styles.container}>
      {/* <Image
        source={
          //   profilePicture
          //     ? { uri: `${profilePicture}` }
          //     :
          require("../assets/logo.png")
        }
        style={styles.icon}
      /> */}
      <View style={styles.body}>
        <View style={styles.firstLineContainer}>
          <StyledText style={styles.title}>Order # {orderNumber}</StyledText>
          <StyledText
            style={
              orderStatus === "Failed"
                ? styles.statusFailedText
                : styles.statusText
            }
          >
            {orderStatus}
          </StyledText>
        </View>
        <StyledText style={styles.bodyText}>
          {new Date(orderDate).toLocaleDateString()}
        </StyledText>
        <StyledText style={styles.timeText}>{orderLine}</StyledText>
      </View>
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
    borderRadius: 15,
    height: 100,
    width: 100,
    backgroundColor: Colors.primary,
  },
  body: {
    // marginLeft: 20,
    flex: 1,
    justifyContent: "space-evenly",
  },
  firstLineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  statusText: {
    fontSize: 10,
    color: "#707070",
    backgroundColor: "#E5E5E5",
    borderRadius: 50,
    width: 75,
    textAlign: "center",
    paddingTop: 2,
  },
  statusFailedText: {
    paddingTop: 2,
    fontSize: 10,
    color: "#F05540",
    backgroundColor: "rgba(240,85,64,0.2)",
    borderRadius: 50,
    width: 75,
    textAlign: "center",
  },
  bodyText: {
    fontSize: 12,
    color: "#707070",
  },
  timeText: {
    marginTop: 10,
    fontSize: 12,
    color: Colors.primary,
  },
});
