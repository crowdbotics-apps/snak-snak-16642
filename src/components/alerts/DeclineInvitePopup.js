/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Modal from 'react-native-modal';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {WP, family, size, HP, colors, appIcons} from '../../services';
import Entypo from 'react-native-vector-icons/Entypo';
import {Button} from '../../components';

export const DeclineInvitePopup = ({
  backgroundColor,
  title,
  color,
  showModal,
  close,
}) => {
  return (
    <Modal
      avoidKeyboard={true}
      isVisible={showModal}
      onBackdropPress={close}
      hasBackdrop={false}
      style={styles.container}>
      <View style={styles.alert}>
        <TouchableOpacity onPress={close} style={styles.topView}>
          <Entypo name={'cross'} size={15} />
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.filterText}>{title}</Text>
          <View style={styles.spacer} />
          <Text style={styles.simpleText}>
            {'Peter'}
            <Text style={styles.filterTitle}> declined </Text>
            your snak snak invitation to: Rosa Mexicano, 10/10/2020, 4:30PM.
          </Text>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <Text style={styles.simpleText}>
            ”I can’t go to Rosa, because I got sick this week, sorry.”
          </Text>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
        </View>
        <TouchableOpacity onPress={close} style={styles.buttonStyle}>
          <Text style={styles.buttonTexT}>Got it</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

// Pass what ever you wanna display beween icon and buttons here
// Eg - you can pass 2 Text like below to display 2 lines of text.
//     <Text style={styles.textMessage}>Are you sure you want to leave</Text>
//     <Text style={styles.groupName}>{groupName}?</Text>

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 0,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  alert: {
    marginHorizontal: WP('12'),
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderRadius: WP('1'),
    flexGrow: 1,
  },
  topView: {
    height: HP('2'),
    backgroundColor: colors.white,
    borderTopEndRadius: WP('1'),
    borderTopStartRadius: WP('1'),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: WP('2'),
    top: 2,
  },
  iconContainer: {
    margin: WP('5'),
  },
  filterText: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Bold,
    color: colors.black_1,
    marginHorizontal: WP('2'),
  },
  groupName: {
    fontSize: size.normal,
    fontFamily: family.Montserrat_Regular,
    marginHorizontal: WP('5'),
    marginBottom: WP('5'),
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: WP('5'),
  },
  button: {
    flex: 1,
    backgroundColor: colors.p1,
    marginRight: WP('2.5'),
    padding: WP('2'),
    height: WP('12'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WP('2'),
  },
  canceButton: {
    backgroundColor: colors.white,
    borderColor: colors.p1,
    borderWidth: 0.4,
  },
  canceButtonText: {
    color: colors.p1,
    fontFamily: family.Montserrat_Regular,
    fontSize: size.xsmall,
  },
  body: {
    paddingHorizontal: WP('4'),
  },
  spacer: {
    marginVertical: WP('1'),
  },
  filterTitle: {
    fontSize: size.xxtiny,
    fontFamily: family.OpenSans_Bold,
    color: colors.black_1,
  },
  simpleText: {
    fontSize: size.xxtiny,
    fontFamily: family.OpenSans_Regular,
    color: colors.black_1,
    paddingLeft: WP('2'),
  },
  buttonStyle: {
    width: '100%',
    borderRadius: 0,
    height: HP('7'),
    backgroundColor: colors.primary,
    top: 1,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTexT: {
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Bold,
    color: colors.white,
  },
});
