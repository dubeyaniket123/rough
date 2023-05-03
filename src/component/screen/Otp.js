import { StyleSheet, View, Text } from 'react-native';
// eslint-disable-next-line no-unused-vars
import AppButton from '../uicomponents/AppButton';
// eslint-disable-next-line no-unused-vars
import OTPTextView from 'react-native-otp-textinput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4
  },

  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default function Otp ({ navigation }) {
  return (

      <View style={styles.container}>
        <Text style={{ fontSize: 28, fontWeight: 400 }}> We have sent an OTP to </Text>
        <Text style={{ fontSize: 28, fontWeight: 400 }}> Your Mobile</Text>
        <Text>Please check your mobile number 071****806</Text>
        <Text style={{ fontWeight: 350, marginBottom: 150 }}>continue to reset your password</Text>

        <OTPTextView
          handleTextChange={e => {}}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          defaultValue=""
        />
        <AppButton
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate('NewPassword')}
          buttonText={'Next'}
          bgColor="#FC6011"
          btnWidth={0.8}
        />
        <View style={{ display: 'flex', padding: 30, flexDirection: 'row' }}>
        <Text> Didn't receive?</Text>
        <Text style={{ fontWeight: 'bold', color: '#FC6011' }}>Click Here</Text>
        </View>
      </View>
  );
}
