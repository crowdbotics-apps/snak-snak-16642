import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

import {useTheme} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import APP_LOGO_MINI from './../../assets/Images/Logo(1).png';
import MENU_MINI from './../../assets/Images/HambMenu.png';

const HeaderLogo2 = ({title, logoHeight = 50, container}) => {
  const {colors} = useTheme();
  const textWhiteColor = colors.textWhite;
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <Image
        style={[styles.logo, {width: 50, height: 50}]}
        source={MENU_MINI}
      />
      <Image
        style={[styles.logo, {width: logoHeight, height: logoHeight}]}
        source={APP_LOGO_MINI}
      />
    </View>
  );
};

export default HeaderLogo2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // paddingTop: 30,
    // paddingBottom: 40,
    alignItems: 'center',
  },
  backBtn: {
    padding: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingTop: 15,
  },
  logo: {
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    marginTop: 30,
    marginBottom: 15,
  },
});
