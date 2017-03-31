import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
{
  /*
  Flex Direction

Adding flexDirection to a component's style determines the primary axis of its layout.
Should the children be organized horizontally (row) or vertically (column)? The default is column.*/
}
export default class FlexDirectionBasics extends Component {
  render() {
    return (

      <View style={{height: 50, flexDirection: 'row'}}  >
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
