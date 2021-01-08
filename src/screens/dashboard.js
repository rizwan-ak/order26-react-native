import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import StyledText from "../components/styledText";
import Chart from "../components/chart";
import Colors from "../config/colors";

import MyTabs from "../components/myTabs";
import { connect } from "react-redux";
import AC from "../redux/actions/actionCreater";

function Dashboard({
  navigation,
  user,
  latestOrder,
  getAllData,
  menuOptions,
  orderCounts,
  messages,
}) {
  useEffect(() => {
    if (!latestOrder) getAllData(user);
  }, [latestOrder]);
  return (
    <View style={styles.conatiner}>
      <ScrollView>
        <Image source={{ uri: `${user?.companyLogo}` }} style={styles.logo} />
        <View style={styles.userContainer}>
          <Image
            source={
              user.profilePicture
                ? { uri: `${user.profilePicture}` }
                : require("../assets/logo.png")
            }
            style={styles.dp}
          />
          <View>
            <StyledText style={styles.userText}>Hello</StyledText>
            <StyledText style={styles.userTitle}>{user.fullName} !</StyledText>
          </View>
        </View>

        {messages && messages.length > 0 && (
          <View style={styles.headingsContainer}>
            {[1, 1].map((c, idx) => (
              <View key={idx} style={styles.headingContainer}>
                <StyledText style={styles.headingTitle}>Heading 1</StyledText>
                <StyledText style={styles.headingBody} multiline>
                  Heading 1 Heading 1 Heading 1 Heading 1
                </StyledText>
              </View>
            ))}
          </View>
        )}

        <View style={styles.categoriesContainer}>
          {menuOptions?.map((c, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.categoryContainer}
              onPress={() => {
                (c.menuOption === "Category" ||
                  c.menuOption === "Employee" ||
                  c.menuOption === "Order") &&
                  navigation.push(`${c.menuOption.toLowerCase()}`);
              }}
            >
              <Image
                source={{ uri: c.imageFile }}
                style={styles.categoryIcon}
              />
              <StyledText style={styles.categoryTitle}>
                {c.menuOption}
              </StyledText>
            </TouchableOpacity>
          ))}

          {/* <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => navigation.push("employees")}
          >
            <Image
              source={require("../assets/icons/employees.png")}
              style={styles.categoryIcon}
            />
            <StyledText style={styles.categoryTitle}>Employees</StyledText>
          </TouchableOpacity> */}
        </View>

        <StyledText style={styles.orderHeader}>Last Order</StyledText>
        <View style={styles.orderContainer}>
          <View style={styles.orderTextContainer}>
            <StyledText style={styles.orderTitle}>
              {latestOrder?.lineNo1}
            </StyledText>
            <StyledText style={styles.orderBody}>
              # {latestOrder?.orderNumber}
            </StyledText>
          </View>
          <StyledText style={styles.orderPrice}>
            {latestOrder?.lineNo2}
          </StyledText>
        </View>

        <StyledText style={styles.orderHeader}>Last 30 Days</StyledText>
        <Chart orderCounts={orderCounts} />
      </ScrollView>
      <MyTabs />
    </View>
  );
}

export default connect((state) => state, {
  getAllData: AC.getAllData,
})(Dashboard);

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 20,
    flex: 1,
  },
  main: {
    flex: 1,
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  userContainer: {
    margin: 20,
    flexDirection: "row",
  },
  userText: {
    fontSize: 12,
    color: "black",
  },
  userTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  dp: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  headingsContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingContainer: {
    width: "48%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  headingTitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  headingBody: {
    marginTop: 10,
    fontSize: 12,
    color: "white",
  },
  categoriesContainer: {
    marginHorizontal: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryContainer: {
    marginVertical: 10,
    width: "30%",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: Colors.secondary,
  },
  categoryIcon: {
    width: 36,
    height: 36,
    alignSelf: "center",
  },
  categoryTitle: {
    marginTop: 10,
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
  orderHeader: {
    margin: 20,
    color: "black",
  },
  orderContainer: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: Colors.secondary,
    flexDirection: "row",
    alignItems: "center",
  },
  orderTextContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  orderTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
  orderBody: {
    fontSize: 12,
    marginTop: 5,
    color: "black",
  },
  orderPrice: {
    color: Colors.tertiary,
    fontSize: 16,
    fontWeight: "500",
  },
});
