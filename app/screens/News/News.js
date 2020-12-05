import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const News = function () {
  return <>
    <View style={style.container}>
      <Text>news</Text>
    </View>
  </>
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40
  }
});

export default News;
