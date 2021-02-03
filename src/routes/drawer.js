import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerComponent} from './DrawerContent';
import {WP, HP} from '../services';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../screens/mainFlow/editProfile';
import Settings from '../screens/mainFlow/settings';
import Search from '../screens/mainFlow/search';
import RecieveInvite from '../screens/mainFlow/recieveInvite';
import MyProfile from '../screens/mainFlow/MyProfile';
import othersProfile from '../screens/mainFlow/othersProfile';
import ChatScreen from '../screens/mainFlow/chatScreen';
import InviteManagement from '../screens/mainFlow/inviteManagement';

const ProfileStack = createStackNavigator();
let profileStak = () => (
  <ProfileStack.Navigator headerMode={'none'}>
    <ProfileStack.Screen name={'MyProfile'} component={MyProfile} />
    {/* <ProfileStack.Screen name={'OthersProfile'} component={othersProfile} />
    <ProfileStack.Screen name={'EditProfile'} component={EditProfile} />
    <ProfileStack.Screen name={'ChatScreen'} component={ChatScreen} /> */}
  </ProfileStack.Navigator>
);

const SettingStack = createStackNavigator();
let settingStak = () => (
  <SettingStack.Navigator headerMode={'none'}>
    <SettingStack.Screen name={'Settings'} component={Settings} />
  </SettingStack.Navigator>
);

const SearchStack = createStackNavigator();
let searchStak = () => (
  <SearchStack.Navigator headerMode={'none'}>
    <SearchStack.Screen name={'Search'} component={Search} />
  </SearchStack.Navigator>
);

const InviteStack = createStackNavigator();
let inviteStak = () => (
  <InviteStack.Navigator headerMode={'none'}>
    {/* <InviteStack.Screen name={'RecieveInvite'} component={RecieveInvite} /> */}
    <InviteStack.Screen name={'InvitesMangement'} component={InviteManagement} />
  </InviteStack.Navigator>
);

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ({route}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerComponent {...props} />}
      drawerStyle={styles.drawer}
      initialRouteName={'SearchSnack'}
      drawerPosition={'left'}>
      <Drawer.Screen name="SearchSnack" component={searchStak} />
      <Drawer.Screen name="InvitesMangement" component={inviteStak} />
      <Drawer.Screen name="YourProfile" component={profileStak} />
      <SettingStack.Screen name={'Settings'} component={Settings} />
      <ProfileStack.Screen name={'OthersProfile'} component={othersProfile} />
      <ProfileStack.Screen name={'EditProfile'} component={EditProfile} />
      <ProfileStack.Screen name="RecieveInvite" component={RecieveInvite} />
      <ProfileStack.Screen name={'ChatScreen'} component={ChatScreen} />
    </Drawer.Navigator>
  );
};

export const styles = StyleSheet.create({
  drawer: {
    width: WP('80%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
});
