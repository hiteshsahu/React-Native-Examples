import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
{
  /*
  Flex Dimensions
Use flex in a component's style to have the component expand and shrink dynamically based on available space.
 Normally you will use flex: 1,which tells a component to fill all available space,
shared evenly amongst each other component with the same parent.
  The larger the flex given, the higher the ratio of space a component will take compared to its siblings.

A component can only expand to fill available space if its parent has dimensions greater than 0.
If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0
and the flex children will not be visible.
  */
}
export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{ height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
