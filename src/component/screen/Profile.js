import { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Dimensions, View, Text, Image, Button } from 'react-native';
import Input from '..//uicomponents/Input';
import AppButton from '../uicomponents/AppButton';
import COLORS from '../uicomponents/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

export default function Profile ({ navigation }) {
 

  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:50}}>
      home
    </Text>
  </View>
  );
}
