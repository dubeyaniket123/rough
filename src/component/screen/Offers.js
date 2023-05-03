import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  StyleSheet,
  Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// eslint-disable-next-line no-unused-vars
import Entipo from 'react-native-vector-icons/Entypo';

const { height, width } = Dimensions.get('window');

export default function Offers ({ buttonText, btnWidth, bgColor, ...props }) {
  return(
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:50}}>
      home
    </Text>
  </View>
  )
};
