import {Platform, StyleSheet} from 'react-native';
import {colors, WP, HP, size, family} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: HP('92'),
  },
  list: {
    backgroundColor: colors.white,
    paddingHorizontal: WP(4),
  },
  flex: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: WP('8'),
    alignItems: 'center',
  },
  filterTitle: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Bold,
    color: colors.primary,
  },
  filterIconContainer: {
    height: WP('5'),
    width: WP('5'),
    backgroundColor: colors.primary,
    borderRadius: WP(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSign: {
    color: colors.white,
  },
  space: {
    height: WP('0.2'),
    display: 'flex',
    backgroundColor: colors.keyboardBorder,
    marginVertical: WP('1'),
  },
  customTextInput: {
    height: WP('10'),
    marginVertical: WP('2'),
    paddingTop: 4,
    // backgroundColor: colors.inputBackground,
  },
  marginBottom: {
    marginBottom: WP('10'),
  },
  stickyContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: WP(4),
    marginBottom: WP('3'),
  },
});
