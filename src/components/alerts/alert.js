import React, {useEffect} from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {WP, HP, size, appIcons, appSvgs, colors} from '../../services';
import Icons from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

export const AlertNotification = props => {
  const {backgroundColor, title, color, showModal, close} = props;
  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        close(false);
      }, 3000);
    }
  }, [close, showModal]);

  return (
    <Modal
      isVisible={showModal}
      hasBackdrop={false}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      animationInTiming={1000}
      animationOutTiming={1000}
      style={[styles.toast]}>
      <View style={[styles.toastContainer, {backgroundColor: backgroundColor}]}>
        <View style={styles.contentContainer}>
          <View style={styles.leftIcon}>{/* <Bell width={WP('7')} /> */}</View>
          <Text style={{color: color}}>
            <Text style={styles.title}>Notification turned on for </Text>
            <Text style={styles.subTitle}>{title}</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={() => close(false)}>
          <Text style={styles.subTitle}>{title}</Text>

          {/* <Image source={appIcons.exit_toast_card} style={[styles.rightIcon]} /> */}
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WP('92'),
    paddingHorizontal: WP('2'),
    paddingVertical: WP('3'),
    borderRadius: WP('8'),
  },
  toast: {
    // height: WP('13.5'),
    position: 'absolute',
    bottom: WP('10'),
    left: 0,
    right: 0,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.lightGrey,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {paddingLeft: WP('8'), fontSize: size.xsmall},
  subTitle: {
    fontWeight: 'bold',
    fontSize: size.xsmall,
  },
  leftIcon: {
    marginRight: WP('2'),
    // marginHorizontal: WP('2'),
  },
  rightIcon: {
    height: WP('8'),
    width: WP('8'),
  },
});
