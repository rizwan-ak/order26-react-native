import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/header";
import StyledText from "../components/styledText";
import Colors from "../config/colors";

import OrderCard from "../components/orderCard";
import { connect } from "react-redux";
import AC from "../redux/actions/actionCreater";

function Orders({ navigation, employee, getOrders, user, orders }) {
  useEffect(() => {
    getOrders(user);
  }, []);

  return (
    <View>
      <Header title="Employees" navigation={navigation} />
      <ScrollView style={styles.container}>
        <StyledText style={styles.headerText}>My Orders</StyledText>
        {orders?.map((o, idx) => (
          <OrderCard key={idx} order={o} />
        ))}
      </ScrollView>
    </View>
  );
}

export default connect((state) => state, {
  getOrders: AC.getOrders,
})(Orders);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  headerText: {
    marginVertical: 10,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
