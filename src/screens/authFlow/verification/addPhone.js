import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {NumKeyboard} from '../../../components';
const AddPhone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Verification</Text>
      </View>
      <Text style={styles.heading}>Put your mobile number</Text>
      <Text style={styles.subHeading}>We will send you an SMS to confirm</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile Number</Text>
        <Text style={styles.inputVal}>090078601</Text>
      </View>
      <View style={styles.keyboardContainer}>
        <NumKeyboard />
      </View>
    </View>
  );
};

export default AddPhone;
