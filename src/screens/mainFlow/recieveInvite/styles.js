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
  stickyContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: WP(4),
    marginBottom: WP('3'),
  },
  filterTitle: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Bold,
    color: colors.primary,
    marginTop: HP('1'),
  },
  simpleText: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Regular,
    color: colors.black_1,
  },
  spacer: {
    marginTop: HP('2'),
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: HP('2'),
  },
  inputRow1: {
    flex: 0.5,
    marginRight: WP('2'),
  },
  inputRow2: {
    flex: 0.5,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: HP('2'),
  },
  buttonRow1: {
    flex: 0.5,
    marginRight: WP('2'),
  },
  buttonRow2: {
    flex: 0.5,
  },
  buttonStyle: {
    borderColor: colors.black_1,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
});
