import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const Root_URL =
  "https://us-central1-otp-react-native-4e01f.cloudfunctions.net";
class SignIn extends Component {
  state = { phone: "", code: "" };
  handleSubmit = async () => {
    try {
      let response = await axios.post(`${proxyurl}${Root_URL}/verifyOtp`, {
        phone: this.state.phone,
        code: this.state.code,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <View>
        <Text
          style={{
            marginBottom: 10,
            marginTop: 10,
            fontSize: 32,
            textAlign: "center",
          }}
        >
          Signin Form
        </Text>
        <View style={{ marginBottom: 10 }}>
          <Input
            value={this.state.phone}
            label="Enter Phone number"
            onChangeText={(phone) => this.setState({ phone })}
          />
          <Input
            value={this.state.code}
            label="Enter Code"
            onChangeText={(code) => this.setState({ code })}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignIn;
