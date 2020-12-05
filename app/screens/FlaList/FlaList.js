import React from 'react';
import {View, FlatList} from 'react-native';

const FlaList = [1,2,3,4,5,6,7,8,9,10]

export default class FlaList extends React.Component {
  _renderItem(data) {
    return <View>
      <Text>{data.item}</Text>
    </View>
  }
  render() {
    return (
      <View>
        <FlatList
          data={FlaList}
          renderItem={(data) => this._renderItem(data)}
        />
      </View>
    )
  }
}

