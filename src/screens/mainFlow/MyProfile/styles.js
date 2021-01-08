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
  profileImgMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  firstImageContainer: {
    height: HP('30'),
    width: WP('45'),
    borderRadius: WP('2')
  },
  imageCont: {
    height: HP('30'),
    width: WP('45'),
    borderRadius: WP('2'),
    overflow: 'hidden'
  },
  imgStyle: {
    height: HP('30'),
    width: WP('45'),
    borderRadius: WP('2')
  },
  smallImgsMainCont: {
    height: HP('30'),
    width: WP('43'),
    justifyContent: 'space-between',
    borderRadius: WP('2')
  },
  smallImgCont: {
    height: HP('14'),
    width: WP('43'),
    borderRadius: WP('2')
  },
  smallImgStyle: {
    height: HP('14'),
    width: WP('43'),
    borderRadius: WP('2')
  },
  nameContainer: {
    width: WP('92'),
    backgroundColor: 'transparent',
    marginVertical: WP('3')
  },
  boldHeaders: {
    fontSize: size.small,
    fontWeight: 'bold',
    marginVertical: WP('1')
  },
  descriptionTextStyle: {
    fontSize: size.xtiny
  },
  bioDetailContainer: {
    width: WP('92'),
    backgroundColor: 'transparent',
    marginVertical: WP('1')
  },
  sportsDetailContainer: {
    width: WP('92'),
    backgroundColor: 'transparent',
    marginVertical: WP('1')
  },
  expertiesLevelMainContainer: {
    width: WP('92'),
    backgroundColor: 'transparent',
    marginVertical: WP('1'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  expertiesDetailsContainer: {
    width: WP('45'),
    backgroundColor: 'transparent',
    marginVertical: WP('1')
  },
  preferedexpertiesTextContainer: {
    width: WP('45'),
    backgroundColor: 'transparent',
    marginVertical: WP('1')
  },
  avalibleTextContainer: {
    width: WP('92'),
    backgroundColor: 'transparent',
    marginVertical: WP('1')
  },
  snaksAndSuccessfulMainCont: {
    width: WP('92'),
    backgroundColor: 'transparent',
    marginVertical: WP('1'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subContainer: {
    width: WP('45'),
    backgroundColor: 'transparent',
    marginVertical: WP('1')
  },
  snaksContainer: {
    height: WP('10'),
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  calenderImgContainer: {
    height: WP('7'),
    width: WP('7'),
    backgroundColor: 'transparent',
    marginRight: WP('2'),
    justifyContent: 'center'
  },
  calanderImgStyle: {
    height: WP('6'),
    width: WP('6'),
    resizeMode: 'contain'
  },
  snaksTextContainerStyle: {
    height: WP('7'),
    backgroundColor: 'transparent'
  },
  successfulSnaksContainer: {
    height: WP('10'),
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  smileImgContStyle: {
    height: WP('7'),
    width: WP('7'),
    backgroundColor: 'transparent',
    marginRight: WP('2'),
    justifyContent: 'center'
  },
  smileImgStyle: {
    height: WP('6'),
    width: WP('6'),
    resizeMode: 'contain'
  },
  successfulTextCont: {
    height: WP('7'),
    backgroundColor: 'transparent'
  },
  timePreferanceTextContainer: { width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('1'), marginBottom: WP('8') },
});
