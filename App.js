import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import MainStack from './src/navigator/MainStack';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
