import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {appIcons, appImages} from '../../../services';
import {colors, WP, HP, size, family} from '../../../services';
import {Button} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';

const Launch = ({navigation}) => {
  const {isKeepLogin} = useSelector(state => state.login);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={appIcons.logo} />
      </View>
      <Text style={styles.title}>We will help you</Text>
      <Text style={styles.title}>find your people :)</Text>
      <Text style={styles.subTitle}>
        Send invites for events and activities you want to do, with the people
        you want to hang out with.
      </Text>
      <View style={styles.imageContainer}>
        <Image source={appImages.launch} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            if (isKeepLogin) {
              navigation.navigate('Settings');
            } else {
              navigation.navigate('AddPhone');
            }
          }}
          title={'Login'}
        />
        <View style={styles.spacer} />
        <Button
          onPress={() => {
            if (isKeepLogin) {
              navigation.navigate('Settings');
            } else {
              navigation.navigate('Signup');
            }
          }}
          title={'Sign up'}
          backgroundColor={colors.white}
          textColor={colors.primary}
          containerStyle={styles.signUpBtn}
        />
      </View>
    </View>
  );
};

export default Launch;
