import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";

import { LineChart } from "react-native-chart-kit";
import Colors from "../config/colors";

export default function Chart({ orderCounts }) {
  const screenWidth = Dimensions.get("window").width;
  const [orderdate, setOrderDate] = useState([1]);
  const [noOfOrder, setNoOfOrder] = useState([1]);
  useEffect(() => {
    if (orderCounts) {
      setOrderDate(orderCounts?.map((c) => new Date(c.orderdate).getDate()));
      setNoOfOrder(orderCounts?.map((c) => c.noOfOrder));
    }
  }, [orderCounts]);

  const data = {
    labels: orderdate,

    datasets: [
      {
        data: noOfOrder,
        color: (opacity = 1) => `rgba(0, 70, 183, ${opacity})`, // optional
        // strokeWidth: 7, // optional
      },
    ],
    legend: ["Last 30 days Orders"], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    fillShadowGradient: "rgb(0, 70, 183)",
    fillShadowGradientOpacity: 0.4,
    decimalPlaces: 0,
    // strokeWidth: 3,
    // barPercentage: 0.5,
    // useShadowColorFromDataset: true, // optional
  };
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth - 40}
        height={256}
        chartConfig={chartConfig}
        // withHorizontalLabels={false}
        bezier
        fromZero
        segments={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
});
