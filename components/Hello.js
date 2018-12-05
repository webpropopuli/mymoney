import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Hello extends React.Component {
  render(text) {
    return (
      <View>
        //<Text style={styles.hello}>Hello. {this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    color: "#aaf",
    fontSize: 26,
    fontWeight: "bold",
    backgroundColor: "#333"
  }
});
