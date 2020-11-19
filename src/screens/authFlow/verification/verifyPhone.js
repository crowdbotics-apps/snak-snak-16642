import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {NumKeyboard} from '../../../components';
const VerifyPhone = () => {
  const [code, setCode] = useState('');
  const _renderDigit = index => {
    if (code.length >= index) {
      return code[index - 1];
    }
  };
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
          <Text style={styles.codeText}>{_renderDigit(1)}</Text>
        </View>
        <View style={styles.codeInputFieldStyle}>
          <Text style={styles.codeText}>{_renderDigit(2)}</Text>
        </View>
        <View style={styles.codeInputFieldStyle}>
          <Text style={styles.codeText}>{_renderDigit(3)}</Text>
        </View>
        <View style={styles.codeInputFieldStyle}>
          <Text style={styles.codeText}>{_renderDigit(4)}</Text>
        </View>
      </View>

      <View style={styles.sendAgainContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.sendAgainText}>Send code Again</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.keyboardContainer}>
        <NumKeyboard limit={4} getValue={setCode} />
      </View>
    </View>
  );
};

export default VerifyPhone;
