import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AUTH_ROUTES, MAIN_ROUTES} from './Routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useSelector} from 'react-redux';

const MainStack = createNativeStackNavigator();
const MainNavigation = ({}) => {
  // const user = useSelector(state => state?.userReducer?.user);
  const user = null;
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <MainStack.Group
            navigationKey="auth"
            screenOptions={{headerShown: false}}>
            {MAIN_ROUTES.map((screen, index) => (
              <MainStack.Screen
                key={index}
                name={screen.path}
                component={screen.component}
              />
            ))}
          </MainStack.Group>
        ) : (
          <MainStack.Group
            navigationKey="auth"
            screenOptions={{headerShown: false}}>
            {AUTH_ROUTES.map((screen, index) => (
              <MainStack.Screen
                key={index}
                name={screen.path}
                component={screen.component}
              />
            ))}
          </MainStack.Group>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
