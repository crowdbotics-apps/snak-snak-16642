import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../services/colors';
import {family, size, WP} from '../../services';
export const Button = ({
  title,
  titleStyle,
  onPress,
  containerStyle,
  backgroundColor = colors.primary,
  textColor = colors.white,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle, {backgroundColor}]}>
      <Text style={[styles.textStyle, {color: textColor}, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: WP('15'),
    display: 'flex',
    borderRadius: WP('3'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: size.large,
    fontFamily: family.OpenSans_Bold,
    color: colors.white,
  },
});
