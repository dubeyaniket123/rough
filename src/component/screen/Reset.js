/* eslint-disable react-native/no-inline-styles */
import React ,{useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../uicomponents/Input';
import AppButton from '../uicomponents/AppButton';



export default function Reset({navigation}) {

  const [password, setPassword] = useState('');
  const [inputs, setInputs] = useState({mobileEmail: '', password: ''});
  const [error, setError] = useState({});

  const validate = () => {
    var isValid = true;
    if (!inputs.mobileEmail) {
      handleErrors('Please Input Email / Mobile', 'mobileEmail');
      isValid = false;
    }
    if (!inputs.password) {
      handleErrors('Please Input Password', 'password');
      isValid = false;
    }
    return isValid;
  };

  const handleClickSend = async () => {
    
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', }}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
          fontSize: 26,
          fontWeight:400,
          color: '#4A4B4D',
        }}>
        Reset Password
      </Text>
      <Text
        style={{
          textAlign:'center',
          fontSize: 14,
          color: '#4A4B4D',
        }}>
        Please enter your email to receive a{' '}
      </Text>
      <Text style={{
          textAlign:'center',
          fontSize: 14,
          color: '#4A4B4D',
        }}>link to create a new password via email</Text>
      <Input
        error={error.mobileEmail}
        onFocus={() => handleErrors(null, 'mobileEmail')}
        onChangeText={txt => handleValues(txt, 'mobileEmail')}
        placeholder="Email"
      />
      <AppButton
        style={{marginTop: 10}}
        onPress={()=>navigation.navigate("Otp")} 
        buttonText={'Send'}
        bgColor="#FC6011"
        btnWidth={0.8}
      />
    </View>
  );
}
