/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default function Home ({  }) {
  return (
  <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:50}}>
      home
    </Text>
  </View>
  );
}
