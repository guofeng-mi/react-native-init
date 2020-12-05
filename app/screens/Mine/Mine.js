import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Mine = function () {
  return <>
    <View style={style.container}>
      <Text>mine</Text>
    </View>
  </>
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40
  }
});

export default Mine;
