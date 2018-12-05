import React from "react";
import { Platform, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import Hello from "./components/Hello";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder={"email"} style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111",
    padding: 10
  },
  input: {
    height: 50,
    width: "100%",
    fontSize: 26,
    color: "#333",
    borderColor: "#eee",
    backgroundColor: "#ddd",
    borderBottomWidth: 1
  }
});
