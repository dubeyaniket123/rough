import { View, Text, Dimensions } from 'react-native';
import Input from '../uicomponents/Input';
import AppButton from '../uicomponents/AppButton';

const { height, width } = Dimensions.get('window');

export default function NewPassword ({navigation}) {
  return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: height * 0.05 }}>
            <Text style={{ fontWeight: 600, fontSize: 22 }}>New Password</Text>
            <Text style={{ marginTop: height * 0.01, fontWeight: 400 }}>Please enter your email to receive a</Text>
            <Text style={{ marginBottom: height * 0.01, fontWeight: 400 }}>link to create a new password via email</Text>
            <Input placeholder="New Password" />
            <Input placeholder="Confirm Password" />
            <AppButton
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate('Login')}
          buttonText={'Update'}
          bgColor="#FC6011"
          btnWidth={0.8}
        />
        </View>
  );
}
