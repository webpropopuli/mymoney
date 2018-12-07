import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

//import AppNavigator from "./navigation/AppNavigator";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      dispVal: ""
    };
  }

  updText = txt => {
    this.setState({ dispVal: `Current email: ${txt}` });
    this.setState({ inputVal: { txt } });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.inputVal}
          style={styles.input}
          keyboardType="email-address"
          placeholder="Enter your email address"
          onChangeText={this.updText}
        />
        <Text style={styles.myText}>{this.state.dispVal}</Text>
        <Button title={"Sweep Now"} stretchy={false} onPress={() => console.log("Doing a sweep...")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
  },
  myText: {
    height: 20,
    fontSize: 12,
    color: "#fff",
    backgroundColor: "#222"
  }
});
