import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyStatusBar from '../../../Components/MyStatusBar';
import Header from '../../../Components/Header';
import {useTheme} from 'react-native-paper';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {AUTH_PATH} from '../../../Navigation/Routes';
const Welcome = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <SafeAreaProvider>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[styles.container, {backgroundColor: colors.primary}]}>
          <Header />
          <View style={styles.imageContainer}>
            <Image
              style={styles.logoStyle}
              source={require('../../../assets/Images/Logo(3).png')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, {color: colors.secondaryText}]}>
              Welcome
            </Text>
            <Text style={[styles.subtitle, {color: colors.secondaryText}]}>
              BUILD YOUR SOCIAL CIRCLE TODAY
            </Text>
            <Text style={[styles.text, {color: colors.secondaryText}]}>
              PROFESSIONAL - SPORT - FRIENDLY - ROMANTIC
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <PrimaryButton
                text="LOGIN"
                height={70}
                onPress={() => navigation.navigate(AUTH_PATH, {type: 'Signin'})}
              />
            </View>
            <View style={styles.button}>
              <PrimaryButton
                text="SIGNUP"
                height={70}
                onPress={() => navigation.navigate(AUTH_PATH, {type: 'Signup'})}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.link}>
              <Text style={[styles.linkText, {color: colors.white}]}>
                CONTACT US
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    width: '45%',
    resizeMode: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: -30,
  },
  title: {
    marginTop: -30,
    fontSize: 34,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 28,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 30,
    marginHorizontal: 10,
  },
  button: {
    marginTop: 15,
  },
  linkText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    textDecorationLine: 'underline',
  },
});
