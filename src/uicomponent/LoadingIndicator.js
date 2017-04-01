'use strict';
import Style from '../Style';
import React, { Component } from 'react';
import { ActivityIndicator, View ,  Text} from 'react-native';

/**
 * Optional Flowtype state and timer types definition
 */
type State = { animating: boolean; };
type Timer = number;

export default class LoadingIndicator extends Component {
  /**
   * Optional Flowtype state and timer types
   */
  state: State;
  _timer: Timer;

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  }

  render() {
    return (

      <View style={Style.vertical}>

  
      <Text  style={Style.headerText} > Activity Indicator</Text>

      <Text style={Style.displayText} >Toggle Animation</Text>
      <ActivityIndicator
        animating={this.state.animating}
        style={[Style.centering, {height: 80}]}
        size="large"
      />

        <Text style={Style.displayText} >Colored Indicator</Text>
        <View style={Style.horizontal}>
        <ActivityIndicator color="#0000ff" />
        <ActivityIndicator color="#aa00aa" />
        <ActivityIndicator color="#aa3300" />
        <ActivityIndicator color="#00aa00" />
       </View>

         <Text style={Style.displayText} >Indicator backgroundColor</Text>
        <View style={Style.horizontal}>
          <ActivityIndicator
            style={[Style.centering]}
          />
          <ActivityIndicator
            style={[Style.centering, {backgroundColor: '#eeeeee'}]}
          />
        </View>

        <Text style={Style.displayText} >Indicator Color and Size</Text>
        <View style={Style.horizontal}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
          <ActivityIndicator
            size="large"
            color="#aa00aa"
          />
          <ActivityIndicator
            size="large"
            color="#aa3300"
          />
          <ActivityIndicator
            size="large"
            color="#00aa00"
          />
        </View>

        <Text style={Style.displayText} > Custome Size</Text>
        <View style={Style.horizontal}>
        <ActivityIndicator
          style={[Style.centering, {transform: [{scale: 1.5}]}]}
          size="large"
        />

        <ActivityIndicator
         style={Style.centering}
         size={75}
       />
        </View>

      </View>

    );
  }
}
