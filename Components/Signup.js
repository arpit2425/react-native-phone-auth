import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const Root_URL =
  "https://us-central1-otp-react-native-4e01f.cloudfunctions.net";
class Signup extends Component {
  state = { phone: "" };
  handleSubmit = async () => {
    try {
      let response = await axios.post(`${proxyurl}${Root_URL}/createUser`, {
        phone: this.state.phone,
      });

      await axios.post(`${proxyurl}${Root_URL}/requestOtp`, {
        phone: this.state.phone,
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <View>
        <Text style={{ marginBottom: 10, fontSize: 32, textAlign: "center" }}>
          Signup Form
        </Text>
        <View style={{ marginBottom: 10 }}>
          <Input
            value={this.state.phone}
            label="Enter Phone number"
            onChangeText={(phone) => this.setState({ phone })}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default Signup;
