import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppImages, Colors } from '../res';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Dashboard/Home';
import Settings from '../Dashboard/settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const MyEventStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sessions" component={Home} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarLabelStyle: { fontSize: 10 },
        tabBarActiveTintColor: Colors.APPBLACK,
        tabBarStyle: { backgroundColor: Colors.WHITE },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? AppImages.Home : AppImages.Home}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? Colors.MEDIUMTURQUOISE : '',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyEvents"
        component={MyEventStack}
        options={{
          tabBarLabel: 'sessions',
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 24, height: 24 }}>
              <Image
                source={focused ? AppImages.Home : AppImages.Home}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? Colors.MEDIUMTURQUOISE : '',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          tabBarLabel: 'settings',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? AppImages.setting : AppImages.setting}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? Colors.MEDIUMTURQUOISE : '',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BottomTabStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default BottomTabStack;
