import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Launch from '../screens/authFlow/launch';
import AddPhone from '../screens/authFlow/verification/addPhone';
import VerifyPhone from '../screens/authFlow/verification/verifyPhone';
import EditProfile from '../screens/mainFlow/editProfile';
import Settings from '../screens/mainFlow/settings';
import Search from '../screens/mainFlow/search';
import Signup from '../screens/authFlow/signup';
const Stack = createStackNavigator();

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AddPhone" component={AddPhone} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
