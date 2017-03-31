import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

{/*Align Items

Adding alignItems to a component's style determines the alignment of children along the secondary axis (if the primary axis is row, then the secondary is column, and vice versa).
 Should children be aligned at the start, the center, the end, or stretched to fill?
  Available options are
    flex-start,
    center,
    flex-end,
    and stretch.

For stretch to have an effect, children must not have a fixed dimension along the secondary axis.
 In the following example, setting alignItems: stretch does nothing until the width: 50 is removed from the children.
  */}

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
