/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {NumKeyboard, Loader} from '../../../components';
import {verifyCodeRequest} from '../../../redux/actions';
import {useDispatch} from 'react-redux';
import axios from 'axios';

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
    var data = JSON.stringify({phone_number: route?.params.phone, token: code});

    var config = {
      method: 'post',
      url: 'https://snak-snak-16642.botics.co/api/v1/verify-phone/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        console.log(response);
        if (!response.data.error) {
          setCode('');
          setLoading(false);
          navigation.navigate('EditProfile');
          console.log(JSON.stringify(response.data));
        } else {
          setLoading(false);
          setTimeout(() => {
            alert('Invalid Code');
          }, 1000);
        }
      })
      .catch(function(error) {
        alert(JSON.stringify(error));
        console.log(error);
      });
    // let params = {
    //   phone_number: route?.params?.phone,
    //   token: code,
    // };
    // console.log('called', params);

    // let cbSuccuss = response => {
    //   setLoading(false);
    //   console.log(response);
    //   navigation.navigate('EditProfile');
    // };
    // let cbFailure = response => {
    //   setLoading(false);
    //   console.log(response);
    // };
    // dispatch(verifyCodeRequest(params, cbSuccuss, cbFailure));
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
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.sendAgainText}>Send code Again</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.keyboardContainer}>
        <NumKeyboard limit={4} getValue={setCode} />
      </View>
      <Loader loading={loading} />
    </View>
  );
};

export default VerifyPhone;
