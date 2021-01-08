/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {NumKeyboard, Loader} from '../../../components';
import {verifyCodeRequest, getSmsCode} from '../../../redux/actions';
import {useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

const VerifyPhone = ({navigation, route}) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (code.length >= 4) {
      onVerifyCode();
    }
  }, [code]);
  const _renderDigit = index => {
    if (code.length >= index) {
      return code[index - 1];
    }
  };

  const onVerifyCode = () => {
    setLoading(true);
    let params = {
      phone_number: route?.params?.phone,
      token: code,
    };
    let cbSuccuss = (response, key) => {
      setLoading(false);
      if (key === 'App') {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'Settings' }]
        }));
      } else {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'EditProfile' }]
        }));
        // navigation.navigate('EditProfile');
      }
    };
    let cbFailure = response => {
      setLoading(false);
    };
    dispatch(verifyCodeRequest(params, cbSuccuss, cbFailure));
  };

  const onGetSmsCode = () => {
    setLoading(true);
    console.log('called');
    let params = {
      phone_number: route?.params?.phone,
    };

    let cbSuccuss = response => {
      setLoading(false);
      setTimeout(() => {
        alert('Code sent again successfully');
      }, 1000);
      console.log(response);
    };
    let cbFailure = response => {
      setLoading(false);
      console.log(response);
    };
    dispatch(getSmsCode(params, cbSuccuss, cbFailure));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Verification</Text>
      </View>
      <Text style={styles.heading}>We sent you an SMS code</Text>
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.subHeading}>On number: </Text>
        <Text style={styles.phoneNumber}>{route?.params?.phone}</Text>
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
        <TouchableOpacity onPress={() => onGetSmsCode()}>
          <Text style={styles.sendAgainText}>Send code Again</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.keyboardContainer}>
        <NumKeyboard
          doneText={'Back'}
          onBack={() => navigation.goBack()}
          limit={4}
          getValue={setCode}
        />
      </View>
      <Loader loading={loading} />
    </View>
  );
};

export default VerifyPhone;
