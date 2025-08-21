import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Platform,
} from 'react-native';
import { AppImages, Fonts, Colors } from '../res';
import CommonInput from '../components/CommonInput';
import AppButton from '../components/AppButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OtpInput } from 'react-native-otp-entry';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const handleEmailChange = text => {
    setEmail(text);
    if (errors.email) {
      setErrors(prevErrors => {
        const { email, ...otherErrors } = prevErrors;
        return otherErrors;
      });
    }
    if (!/^\S+@\S+\.\S+$/.test(text)) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors.email;
        return newErrors;
      });
    }
  };
  const handleSubmit = () => {
    navigation.navigate('BottomTabStack');
  };

  return (
    <ImageBackground style={styles.container} source={AppImages.Bg}>
      <View style={{ flex: 1 }}>
        {/* Header */}
        <Text style={styles.Login}>Login or Create{'\n'}an account!</Text>

        {/* Center Inputs */}
        <View style={styles.centerContainer}>
          <CommonInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
            inputView={{ height: 60, padding: 10 }}
            errorMsg={errors?.email || errors}
          />
          <View style={{ marginHorizontal: 15 }}>
            <OtpInput
              numberOfDigits={6}
              focusColor="black"
              autoFocus={false}
              hideStick={true}
              blurOnFilled={true}
              disabled={false}
              type="numeric"
              secureTextEntry={false}
              onTextChange={setOtp}
              onFilled={text => {
                console.log(`OTP is ${text}`);
              }}
              textInputProps={{
                accessibilityLabel: 'One-Time Password',
              }}
              theme={{
                containerStyle: styles.Inputcontainer,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusStickStyle: styles.focusStick,
              }}
            />
          </View>

          <Text style={styles.signupText}>
            Don’t have an account?{' '}
            <Text
              style={{ fontFamily: Fonts.bold, color: Colors.MEDIUMTURQUOISE }}
              onPress={() => navigation.navigate('Signup')}
            >
              Signup
            </Text>
          </Text>
        </View>

        {/* Bottom Button */}
        <View style={styles.bottomButton}>
          <AppButton text={'Proceed'} onPress={handleSubmit} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Login: {
    fontSize: 28,
    fontFamily: Fonts.SemiBold,
    textAlign: 'center',
    marginTop: 60, // keep it top
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center', // center inputs
    paddingHorizontal: 10,
  },
  pinCodeContainer: {
    height: 45,
    width: 45,
    marginLeft: 5,
    marginVertical: 20,
    backgroundColor: Colors.WHITE,
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: Colors.BLACK,
  },
  bottomButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
    right: 20,
  },
});
