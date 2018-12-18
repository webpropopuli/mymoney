import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
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
  },
  myButtons: {
    flexDirection: "column",
    borderColor: "black"
  }
}));
