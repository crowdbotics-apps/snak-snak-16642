import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {NumKeyboard} from '../../../components';
const VerifyPhone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Verification</Text>
      </View>
      <Text style={styles.heading}>We sent you an SMS code</Text>
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.subHeading}>On number: </Text>
        <Text style={styles.phoneNumber}>+55 (75) 7854 312685</Text>
      </View>

      <View style={styles.otpContainer}>
        <View style={styles.codeInputFieldStyle}>
          <Text style={styles.codeText}></Text>
        </View>
        <View style={styles.codeInputFieldStyle}>
          <Text style={styles.codeText}></Text>
        </View>
        <View style={styles.codeInputFieldStyle}>
          <Text style={styles.codeText}></Text>
        </View>
        <View style={styles.codeInputFieldStyle}>
          <Text style={styles.codeText}></Text>
        </View>
      </View>

      <View style={styles.sendAgainContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.sendAgainText}>Send code Again</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.keyboardContainer}>
        <NumKeyboard />
      </View>
    </View>
  );
};

export default VerifyPhone;
