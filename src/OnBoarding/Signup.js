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

export default function Signup() {
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');

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

  return (
    <ImageBackground style={styles.container} source={AppImages.Bg}>
      <View style={{ flex: 1 }}>
        <View style={styles.centerContainer}>
          <Text style={styles.Login}>Signup</Text>
          <CommonInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            inputView={{ height: 60, padding: 10 }}
          />

          <CommonInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
            inputView={{ height: 60, padding: 10 }}
            errorMsg={errors?.email || errors}
          />
          <CommonInput
            placeholder="Postal Code"
            value={postalCode}
            onChangeText={setPostalCode}
            keyboardType="numeric"
            inputView={{ height: 60, padding: 10 }}
          />
          <CommonInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
            inputView={{ height: 150, padding: 10 }}
          />
        </View>

        {/* Bottom Button */}
        <View style={styles.bottomButton}>
          <AppButton text={'Signup'} />
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
    // marginTop: 40,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center', // center inputs
    paddingHorizontal: 10,
  },

  bottomButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
    right: 20,
  },
});
