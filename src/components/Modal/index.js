import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

export const CustomModal = ({children, modalVisible, toggleModal}) => {
  return (
    <Modal
      animationInTiming={500}
      animationOutTiming={500}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      avoidKeyboard={false}
      transparent={true}
      backdropColor={'rgba(0,0,0,0.9)'}
      isVisible={modalVisible}
      onBackdropPress={toggleModal}
      style={styles.modelStyle}>
      <View style={styles.modalContainer}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
