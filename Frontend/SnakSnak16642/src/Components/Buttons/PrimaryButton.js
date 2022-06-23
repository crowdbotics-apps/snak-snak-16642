import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {useTheme} from 'react-native-paper';

const PrimaryButton = ({
  text = '',
  loading = false,
  onPress = () => {},
  fontSize = 20,
  radius = 12,
  background,
  textColor,
}) => {
  const {colors} = useTheme();

  const textPrimaryColor = colors.textPrimary;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {borderRadius: radius, backgroundColor: background || colors.white},
      ]}
      disabled={loading}>
      {loading && <ActivityIndicator color={textWhiteColor} />}
      <Text
        style={[
          styles.text,
          {
            color: textColor || colors.primaryText,
            fontSize,
            marginLeft: loading ? 5 : 0,
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    maxHeight: 50,
    minHeight: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7.95,

    elevation: 5,
  },
  text: {
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
    // fontWeight: '800',
  },
});
