import {StyleSheet} from 'react-native';
import {colors, WP, HP, size, family} from '../../services';

export const styles = StyleSheet.create({
  //keyboard
  keyboardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: WP(5),
  },
  keyContainer: {
    height: WP(20),
    width: WP(26.5),
    borderWidth: 1,
    borderColor: colors.keyboardBorder,
    borderRadius: WP(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacerKeyContainer: {
    height: WP(20),
    width: WP(26.5),
  },
  keyLabel: {
    color: colors.black_1,
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.xxtitle,
  },
  backspace: {
    width: WP(8),
    resizeMode: 'contain',
  },
  doneText: {
    fontFamily: family.OpenSans_Bold,
    color: colors.white,
    fontSize: size.normal,
  },
});
