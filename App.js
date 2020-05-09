import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Signup from "./Components/Signup";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Signup />
      <SignIn />
    </View>
  );
}

export default App;
