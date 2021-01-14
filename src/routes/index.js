import React, {useState, useEffect, useCallback} from 'react';
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
import {useSelector} from 'react-redux';
import MyProfile from '../screens/mainFlow/MyProfile';
import othersProfile from '../screens/mainFlow/othersProfile';

const Stack = createStackNavigator();

export const AppContainer = () => {
  // UNCOMMENT THIS IN PRODUCTION AND REMOVE THE ABOVE
  const [initialRoute, setInitialRoute] = useState({
    initialRouteName: '',
    initialParams: {},
  });

  const {isKeepLogin} = useSelector(state => state.login);

  const [loading, setLoading] = useState(true);

  const setupScreenOrder = useCallback(() => {
    console.log('[Login persistor]', isKeepLogin);
    // CHECK ROLE IN THE MEMORY
    if (isKeepLogin) {
      setInitialRoute({
        initialRouteName: 'Settings',
        //initialRouteName: 'MyProfile',
      });
    } else {
      setInitialRoute({initialRouteName: 'Launch'});
    }
    // HIDE THE LOADER AND SHOW THE STACK
    setLoading(false);
  }, [isKeepLogin]);

  // ON START, SET THE SCREEN ORDER BASED ON THE ROLE OF THE USER IN MEMORY
  useEffect(() => {
    setupScreenOrder();
  }, [setupScreenOrder]);

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={initialRoute.initialRouteName}>
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
