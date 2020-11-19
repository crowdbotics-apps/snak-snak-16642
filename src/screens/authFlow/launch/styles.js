import {StyleSheet, Platform} from 'react-native';
import {colors, WP, HP, size, family} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: WP(4),
  },
  logoContainer: {
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        marginVertical: HP(3),
      },
      android: {
        marginVertical: HP(6),
      },
    }),
  },
  title: {
    fontSize: size.xxtitle,
    fontFamily: family.OpenSans_Bold,
    color: colors.gray_2,
  },
  subTitle: {
    marginVertical: WP('3'),
    fontSize: size.normal,
    fontFamily: family.OpenSans_Regular,
    color: colors.gray_2,
  },
  imageContainer: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    marginBottom: HP(2),
  },
  logo: {
    width: WP(50),
    resizeMode: 'contain',
  },
  image: {
    width: WP(90),
    resizeMode: 'contain',
  },
});
