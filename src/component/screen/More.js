import { View, Text, Dimensions, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import MCI from"react-native-vector-icons/Ionicons";
import IC from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo"
import { ScrollView } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

export default function More() {
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:50}}>
      home
    </Text>
  </View>
         )
}