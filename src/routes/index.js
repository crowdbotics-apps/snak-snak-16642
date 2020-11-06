import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Launch from '../screens/authFlow/launch';
import AddPhone from '../screens/authFlow/verification/addPhone';
import VerifyPhone from '../screens/authFlow/verification/verifyPhone';

const Stack = createStackNavigator();

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="AddPhone" component={AddPhone} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
