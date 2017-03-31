import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';
{
  /*
  ListView works well for long lists of data, where the number of items might change over time.
  Unlike the more generic ScrollView, the ListView only renders elements that are currently showing on the screen,
   not all the elements at once.

The ListView component requires two props:
dataSource and renderRow.
dataSource is the source of information for the list.

renderRow takes one item from the source and returns a formatted component to render.*
*/}
export default class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
     //A rowHasChanged function is required to use ListView.
     //Here we just say a row has changed if the row we are on is not the same as the previous row
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}
