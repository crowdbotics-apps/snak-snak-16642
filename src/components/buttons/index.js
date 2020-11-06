import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../services/colors';
import {family, size, WP} from '../../services';
export const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: WP(15),
    display: 'flex',
    borderRadius: WP(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: size.large,
    fontFamily: family.OpenSans_Bold,
    color: colors.white,
  },
});
