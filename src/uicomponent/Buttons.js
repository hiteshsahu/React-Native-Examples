'use strict';
import Style from '../Style';
import React, { Component } from 'react';
import { Button, View ,  Text, Alert} from 'react-native';

export default class Buttons extends Component {

  render() {
    return (

      <View style={Style.vertical}>

      <Text  style={Style.headerText} > Buttons </Text>

      <Text style={Style.displayText} >Simple Button</Text>
{/* The color prop controls the color of the text.
  On Android, the color adjusts the background color of the button.
  On iOS, the color prop controls the color of the text
  */}
    <View style={Style.horizontal}>
      <Button
        onPress={onButtonPress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
     </View>

    <Text style={Style.displayText} >Button Spacing</Text>
     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          onPress={onButtonPress}
          title="This looks great!"
          accessibilityLabel="This sounds great!"
        />
        <Button
          onPress={onButtonPress}
          title="Ok!"
          color="#841584"
          accessibilityLabel="Ok, Great!"
        />
    </View>

      <Text style={Style.displayText} >Disabled Button</Text>
        <Button
         disabled
         onPress={onButtonPress}
         title="I Am Disabled"
         accessibilityLabel="See an informative alert"
       />


      </View>

    );
  }
}

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
