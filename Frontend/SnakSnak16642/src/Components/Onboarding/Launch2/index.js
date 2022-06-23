import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Filled from '../../../assets/svgs/Images/filled-circle.svg';
import Empty from '../../../assets/svgs/Images/empty-circle.svg';
import {styles} from './styles';
import MyStatusBar from '../../../Components/MyStatusBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PrimaryButton from '../../Buttons/PrimaryButton';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {WELCOME_PATH} from '../../../Navigation/Routes';
const Onboarding = ({isActive, onIndicatorPress}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <SafeAreaProvider>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[styles.container, {backgroundColor: colors.primary}]}>
          {/* <Onboarding2 height={'100%'} style={{position:'absolute', bottom:0, backgroundColor:'blue'}} /> */}
          <Image
            style={styles.logoStyle}
            source={require('../../../assets/Images/Logo.png')}
          />
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.title}>THANK YOU FOR CHOSING US</Text>
            <Text style={styles.subTitle}>
              It allows you to send invites for events and activities you want
              to do, with the people you want to hang out with.
            </Text>
            <Text style={styles.subTitle}>
              Once you have found a user you want to match with you can send
              them a place and time and allow them to accept your invitation
            </Text>
          </View>

          <View style={styles.bottomView}>
            <View style={styles.btnContainer}>
              <PrimaryButton
                text="Get Started"
                onPress={() => navigation.navigate(WELCOME_PATH)}
              />
            </View>
            <View style={styles.indicatorView}>
              <TouchableOpacity
                onPress={() => onIndicatorPress(0)}
                style={styles.shadow}>
                <Empty />
              </TouchableOpacity>
              <View style={styles.spaceBetween} />
              <View style={styles.shadow}>
                <Filled />
              </View>
            </View>
          </View>
          <Image
            style={styles.image2}
            resizeMode={'contain'}
            source={require('../../../assets/Images/Onboarding2.png')}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  );
};
export default Onboarding;
