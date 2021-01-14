import {Platform, StyleSheet} from 'react-native';
import {colors, WP, HP, size, family} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: WP(4),
  },
  titleContainer: {
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
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Regular,
    color: colors.gray_3,
  },
  heading: {
    fontSize: size.h5,
    fontFamily: family.OpenSans_Bold,
    color: colors.black_1,
  },
  subHeading: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Regular,
    color: colors.gray_3,
    marginTop: HP(1),
    marginBottom: HP(2),
  },
  phoneNumber: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.primary,
    marginTop: HP(1),
    marginBottom: HP(2),
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
  },
  otpContainer: {
    display: 'flex',
    height: WP('18'),
    marginTop: WP('2'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeInputFieldStyle: {
    width: WP('18'),
    height: WP('18'),
    borderRadius: WP('2'),
    borderWidth: 1,
    borderColor: colors.keyboardBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeText: {
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.title,
    color: colors.black_1,
  },
  sendAgainContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: HP(2),
  },
  sendAgainText: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.primary,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.primary,
  },
  phoneContainer: {
    flex: 0.3,
    position: 'absolute',
    zIndex: 10,
    top: HP('3.5'),
    left: WP('2'),
  },
  textInputContainer: {
    flex: 1,
  },
});
