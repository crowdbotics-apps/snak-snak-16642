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
import RecieveInvite from '../screens/mainFlow/recieveInvite';
import MyProfile from '../screens/mainFlow/MyProfile';
import othersProfile from '../screens/mainFlow/othersProfile';

const Stack = createStackNavigator();

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="othersProfile">
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AddPhone" component={AddPhone} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
        <Stack.Screen name="RecieveInvite" component={RecieveInvite} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="othersProfile" component={othersProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
