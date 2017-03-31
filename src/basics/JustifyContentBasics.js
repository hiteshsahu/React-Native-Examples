import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
{/*
  Justify Content

Adding justifyContent to a component's style determines the distribution of children along the primary axis. Should children be distributed at the start, the center,
 the end, or spaced evenly? Available options are
    flex-start,
    center,
    flex-end,
    space-around,
    and space-between.*/
}
  export default class JustifyContentBasics extends Component {
  render() {
    return (

      <View style={{
        height:200,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
