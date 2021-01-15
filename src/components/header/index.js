import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {appIcons} from '../../assets/icons';
import {colors, family, HP, size, WP} from '../../services';
export const Header = ({title, style, showLeftIcon, onLeftIconPress, isImage, profileImg}) => {
  const _renderLeftIcon = () => {
    if (showLeftIcon) {
      return (
        <TouchableOpacity onPress={onLeftIconPress} style={styles.leftIcon}>
          <Image source={appIcons.menu} />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={styles.titleContainer}>
      {_renderLeftIcon()}
      {isImage ? <Image source={profileImg} style={styles.profileImgStyle} /> : null}
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // height: WP('7'),
    ...Platform.select({
      ios: {
        marginVertical: HP(3),
      },
      android: {
        marginVertical: HP(6),
      },
    }),
  },
  leftIcon: {
    position: 'absolute',
    left: -7,
  },
  title: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Regular,
    color: colors.gray_3,
  },
  profileImgStyle: {
    height:HP('7'),
    width:WP('12'), 
    backgroundColor:'red',
    marginRight:WP('4'),
    borderRadius:WP('4'),
  },
});
