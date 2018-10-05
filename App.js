import React from 'react';
import { Text, View, Alert } from 'react-native';

import { TextButton } from './components/TextButton';

export default class App extends React.Component {

  onTouch = () => {
    Alert.alert("1", "2");
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}>

        <Text style={{ flex: 1 }}> Hello World </Text>
        <TextButton onPress={this.onTouch}> 
          Alou
        </TextButton>
      </View>
    );
  }
}

