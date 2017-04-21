'use strict';
import Style from '../Style';
import React, { Component } from 'react';
import { Button, View ,  Text, Alert} from 'react-native';

export default class TextView extends Component {

  constructor(props) {
   super(props);
   this.state = {
     titleText: "Bird's Nest",
     bodyText: 'This is not really a bird nest.'
   };}

  render() {
    return (

      <View style={Style.vertical, Style.centering}>

      <Text  style={Style.headerText} > TextView </Text>

      <Text style={Style.displayText} >Simple Text</Text>

      <Text style={Style.titleText} onPress={this.onPressTitle}>
        {this.state.titleText}{'\n'}{'\n'}
      </Text>
      <Text numberOfLines={5}>
        {this.state.bodyText}
      </Text>
{/* The color prop controls the color of the text.
  On Android, the color adjusts the background color of the button.
  On iOS, the color prop controls the color of the text

  <Text style={Style.baseText}>
      <Text style={Style.titleText} onPress={this.onPressTitle}>
        {this.state.titleText}{'\n'}{'\n'}
      </Text>
      <Text numberOfLines={5}>
        {this.state.bodyText}
      </Text>
    </Text>
  */}

      </View>

    );
  }
}

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
