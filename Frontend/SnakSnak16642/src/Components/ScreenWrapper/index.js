import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import HeaderLogo from './HeaderLogo';
import HeaderLogo2 from './HeaderLogo2';
import Header from './../Header';
import ComponentWrapper from './ComponentWrapper';
const ScreenWrapper = ({
  children,
  title,
  componentTitle,
  isLogo = true,
  titleLong,
  logoHeight,
  componentIcon,
  hasBottomBar,
  logo2 = false,
}) => {
  const {colors} = useTheme();

  const primaryColor = colors.primary;
  return (
    <View style={[styles.container, {backgroundColor: primaryColor}]}>
      {isLogo ? (
        !logo2 ? (
          <>
            <Header />
            <HeaderLogo title={title} logoHeight={logoHeight} />
          </>
        ) : (
          <>
            <HeaderLogo2 title={title} logoHeight={logoHeight} />
          </>
        )
      ) : (
        <Header title={title} />
      )}
      <ComponentWrapper
        componentTitle={componentTitle}
        hasBottomBar={hasBottomBar}
        componentIcon={componentIcon}
        radius={!Boolean(titleLong)}>
        {children}
      </ComponentWrapper>
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
