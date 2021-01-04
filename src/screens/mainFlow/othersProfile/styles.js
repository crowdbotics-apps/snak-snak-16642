import {Platform, StyleSheet} from 'react-native';
import {colors, WP, HP, size, family} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: HP('92'),
  },
  // list: {
  //   backgroundColor: colors.white,
  //   paddingHorizontal: WP(4),
  // },
  flexCon: {
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
  top:{
      marginTop:WP ('5'),
  },
});
