import {Platform, StyleSheet} from 'react-native';
import {colors, WP, HP, size, family} from '../../../services';

export const styles = StyleSheet.create({
  headings: {
    color: colors.black_1,
    fontFamily: family.OpenSans_Bold,
    fontSize: size.xsmall,
  },
  top: {
    marginTop: WP(5),
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: WP(4),
    height: HP('92'),
  },
  text: {
    color: colors.black_1,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.tiny,
  },
  rowContainer: {
    flexDirection: 'row',
    height: HP('5'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  space: {
    height: WP('0.2'),
    display: 'flex',
    backgroundColor: colors.keyboardBorder,
    marginVertical: WP('4'),
  },
  textDanger: {
    color: colors.primary,
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.tiny,
    paddingVertical: WP('3'),
  },
  textSignOutDanger: {
    color: colors.primary,
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.tiny,
  },
  flex: {
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: WP('100'),
    paddingHorizontal: WP(4),
  },
  innerContainer: {
    height: HP('8'),
    backgroundColor: colors.white,
    borderTopWidth: WP('0.2'),
    borderTopColor: colors.keyboardBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
