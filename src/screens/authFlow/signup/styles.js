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
    // backgroundColor: colors.black_1,
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
});
