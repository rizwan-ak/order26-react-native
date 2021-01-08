import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import StyledText from "../components/styledText";
import Colors from "../config/colors";
import AC from "../redux/actions/actionCreater";

function Login({ navigation, setUser, user, error }) {
  const [state, setState] = useState({
    username: "",
    password: "",
    hidePassword: true,
  });
  const { username, password, hidePassword } = state;

  const saveHandler = () => {
    setUser(state);
  };
  useEffect(() => {
    user?.signature && navigation.push("dashboard");
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <StyledText style={styles.title}>LOGIN</StyledText>
        <StyledText style={styles.label}>Username</StyledText>
        <TextInput
          style={styles.input}
          onChangeText={(username) => setState({ ...state, username })}
          value={username}
        />
        <StyledText style={styles.label}>Password</StyledText>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry={hidePassword}
            onChangeText={(password) => setState({ ...state, password })}
            value={password}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setState({ ...state, hidePassword: !hidePassword })}
          >
            <Image source={require("../assets/icons/eye.png")} />
          </TouchableOpacity>
        </View>
        {error && (
          <StyledText style={styles.error}>
            Invalid credentials please retry
          </StyledText>
        )}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={saveHandler}
          disabled={!username && !password}
        >
          <StyledText style={styles.loginButtonText}>Login</StyledText>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
    </View>
  );
}

export default connect((state) => state, {
  setUser: AC.setUser,
})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    flex: 3,
    padding: 20,
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  label: {
    marginVertical: 20,
    fontSize: 12,
    color: "black",
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  passwordContainer: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 15,
  },
  loginButton: {
    marginTop: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: Colors.primary,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  logoContainer: {
    backgroundColor: Colors.primary,
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 120,
    width: 100,
  },
  error: {
    marginTop: 20,
    color: "red",
    fontSize: 16,
    alignSelf: "center",
  },
});
