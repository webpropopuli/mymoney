import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import styles from "./styles";

//import AppNavigator from "./navigation/AppNavigator";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      dispVal: ""
    };
  }

  sweep = () => {
    console.log("Doing a sweep...");
  };

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

        <View style={styles.myButtons}>
          <Button title={"Sweep Now"} stretchy={false} onPress={() => this.sweep()} />
          <Button
            title={"other thing"}
            stretchy={false}
            onPress={() => {
              console.log("some other thing...");
            }}
          />
        </View>
      </View>
    );
  }
}
