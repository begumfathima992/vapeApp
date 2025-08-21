import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { AppImages } from '../res';
export default function Splash() {
  return (
    <ImageBackground source={AppImages.Splash} style={styles.container}>
      {/* <Text>hii</Text> */}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
