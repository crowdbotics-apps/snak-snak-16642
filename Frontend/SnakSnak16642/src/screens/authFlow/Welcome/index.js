import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Filled from '../../../assets/svgs/Images/filled-circle.svg';
import Empty from '../../../assets/svgs/Images/empty-circle.svg';
import {styles} from './styles';
import {Button} from 'react-native-paper';
import MyStatusBar from '../../../Components/MyStatusBar';

const Welcome = () => {
  return (
    <SafeAreaProvider>
      <MyStatusBar backgroundColor={'#800203'} barStyle="light-content" />
      <View style={styles.container}>
        {/* <Onboarding2 height={'100%'} style={{position:'absolute', bottom:0, backgroundColor:'blue'}} /> */}
        <Image
          style={styles.logoStyle}
          source={require('../../../assets/Images/Logo(3).png')}
        />
      </View>
    </SafeAreaProvider>
  );
};
export default Welcome;
