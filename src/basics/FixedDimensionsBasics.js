import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
{
  /*
  Fixed Dimensions

  The simplest way to set the dimensions of a component is by adding a fixed width and height to style.
 All dimensions in React Native are unitless, and represent density-independent pixels.
  */
}
export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
