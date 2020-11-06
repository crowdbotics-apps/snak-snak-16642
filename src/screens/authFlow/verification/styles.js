import {StyleSheet} from 'react-native';
import {colors, WP, HP, size, family} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: WP(4),
  },
  titleContainer: {
    marginVertical: WP('5'),
    alignSelf: 'center',
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
    marginTop: WP('2'),
    marginBottom: WP('5'),
  },
  phoneNumber: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.primary,
    marginTop: WP('2'),
    marginBottom: WP('5'),
  },
  inputContainer: {
    display: 'flex',
    height: HP(10),
    backgroundColor: colors.inputBackground,
    borderRadius: WP(3),
    paddingHorizontal: WP(5),
    paddingTop: WP(3),
  },
  label: {
    color: colors.labels,
    fontFamily: family.OpenSans_Bold,
    fontSize: size.xxtiny,
  },
  inputVal: {
    marginTop: WP(1),
    color: colors.gray_2,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.small,
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
});
