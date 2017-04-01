'use strict';
import Style from '../Style';
import React, { Component } from 'react';
import { Switch, View , Text, Alert} from 'react-native';

export default class Switches extends Component {

  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
      colorFalseSwitchIsOn: false,
  };


  render() {
    return (

      <View style={Style.vertical , Style.centering}>

      <Text  style={Style.headerText} > Switches </Text>

      <Text style={Style.displayText} >Simple Switch</Text>
         <Switch
           onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
           style={{marginBottom: 10}}
           value={this.state.falseSwitchIsOn} />

            <Text>{this.state.falseSwitchIsOn ? 'On' : 'Off'}</Text>

         <Switch
           onValueChange={(value) => this.setState({trueSwitchIsOn: value}) }
           value={this.state.trueSwitchIsOn} />

           <Text>{this.state.trueSwitchIsOn ? 'On' : 'Off'}</Text>

       <Text style={Style.displayText} >Disabled Switch</Text>
       <Switch
         disabled={true}
         style={{marginBottom: 10}}
         value={true} />


      <Text  style={Style.displayText} > Switch Color </Text>
         <Switch
         onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
         onTintColor="#00ff00"
         style={{marginBottom: 10}}
         thumbTintColor="#0000ff"
         tintColor="#ff0000"
         value={this.state.colorFalseSwitchIsOn} />

      </View>

    );
  }
}

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
