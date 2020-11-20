import {Platform, StyleSheet} from 'react-native';
import {colors, WP, HP, size, family} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: WP(4),
  },
  heading: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Bold,
    color: colors.black_1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagePlaceHolder: {
    height: HP(13),
    width: WP(23),
    backgroundColor: colors.inputBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WP(2),
  },
  imagePlaceHolderVertical: {
    height: HP(30),
    width: WP(43.6),
    backgroundColor: colors.inputBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WP(2),
  },
  imagePlaceHolderHorizontal: {
    height: HP(13.6),
    width: WP(43.6),
    backgroundColor: colors.inputBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WP(2),
  },
  top: {
    marginTop: WP(5),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: WP(42),
  },
  doneButton: {
    marginVertical: HP(3),
  },
  horizontalImage: {
    height: HP(30),
    justifyContent: 'space-between',
  },
  headings: {
    color: colors.black_1,
    fontFamily: family.OpenSans_Bold,
    fontSize: size.xsmall,
  },
  labelRange: {
    color: colors.black_1,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.tiny,
  },
  rangeSlider: {
    alignItems: 'center',
  },
});
