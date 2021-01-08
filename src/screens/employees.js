import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/header";
import StyledText from "../components/styledText";
import Colors from "../config/colors";

import EmployeesCard from "../components/employeesCard";
import { connect } from "react-redux";
import AC from "../redux/actions/actionCreater";

function Employees({ navigation, employee, getEmployee, user, updateStatus }) {
  useEffect(() => {
    getEmployee(user);
  }, []);

  const changeStatus = (data) => {
    updateStatus(user, data);
  };

  return (
    <View>
      <Header title="Employees" navigation={navigation} />
      <ScrollView style={styles.container}>
        {employee?.filter((e) => e.isActive === "True").length > 0 && (
          <StyledText style={styles.headerText}>Active</StyledText>
        )}
        {employee
          ?.filter((e) => e.isActive === "True")
          .map((e, idx) => (
            <EmployeesCard key={idx} employee={e} update={changeStatus} />
          ))}

        {employee?.filter((e) => e.isActive === "False").length > 0 && (
          <StyledText style={styles.headerText}>Inactive</StyledText>
        )}
        {employee
          ?.filter((e) => e.isActive === "False")
          .map((e, idx) => (
            <EmployeesCard key={idx} employee={e} update={changeStatus} />
          ))}
      </ScrollView>
    </View>
  );
}

export default connect((state) => state, {
  getEmployee: AC.getEmployee,
  updateStatus: AC.updateStatus,
})(Employees);

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
