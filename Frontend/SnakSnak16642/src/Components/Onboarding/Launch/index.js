import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Filled from '../../../assets/svgs/Images/filled-circle.svg';
import Empty from '../../../assets/svgs/Images/empty-circle.svg';
import {styles} from './styles';
import {Button} from 'react-native-paper';
import MyStatusBar from '../../../Components/MyStatusBar';
import ELLIPSE5 from './../../../assets/Images/Ellipse5.png';
import ELLIPSE6 from './../../../assets/Images/Ellipse6.png';
import ELLIPSE7 from './../../../assets/Images/Ellipse7.png';
import ELLIPSE8 from './../../../assets/Images/Ellipse8.png';
import ELLIPSE9 from './../../../assets/Images/Ellipse9.png';
import ELLIPSE10 from './../../../assets/Images/Ellipse10.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from 'react-native-paper';
const Onboarding = ({isActive, onIndicatorPress}) => {
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
          <View style={styles.imageContainer}>
            <View style={styles.smallContainer}>
              <Image
                source={ELLIPSE6}
                style={[styles.imageSmall, styles.position6]}
              />
              <Image
                source={ELLIPSE7}
                style={[styles.imageSmall, styles.position7]}
              />
              <Image
                source={ELLIPSE8}
                style={[styles.imageSmall, styles.position8]}
              />
              <Image
                source={ELLIPSE9}
                style={[styles.imageSmall, styles.position9]}
              />
              <Image
                source={ELLIPSE10}
                style={[styles.imageSmall, styles.position10]}
              />
            </View>
            <View style={styles.bigContainer}>
              <Image
                source={ELLIPSE5}
                style={[styles.imageBig, styles.position5]}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <Text style={styles.title}>THANK YOU FOR CHOSING US</Text>
            <Text style={styles.subTitle}>
              Meet up with people in your profession, a social network for
              career-oriented get-togethers, or make some new like-minded
              friends.
            </Text>
            <Text style={styles.subTitle}>
              Snak Snak is a meet-up app that allows you to meet people by
              sending invitations to events immediately.
            </Text>
          </View>
          <View style={styles.indicatorView}>
            <View style={styles.shadow}>
              <Filled />
            </View>
            <View style={styles.spaceBetween} />
            <TouchableOpacity
              onPress={() => onIndicatorPress(1)}
              style={styles.shadow}>
              <Empty />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  );
};
export default Onboarding;
