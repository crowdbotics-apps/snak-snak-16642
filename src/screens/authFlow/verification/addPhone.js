import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {styles} from './styles';
import {NumKeyboard, CustomTextInput, Loader} from '../../../components';
import PhoneInput from 'react-native-phone-input';
import {useDispatch, useSelector} from 'react-redux';
import {getSmsCode} from '../../../redux/actions';
import {colors} from '../../../services';

const AddPhone = ({navigation}) => {
  let phoneNo = useRef(null);

  const [phone, setPhone] = useState('+923015957220');
  const [disabled, setDisabled] = useState(true);
  const [isValid, setValid] = useState(true);
  const [country_code, setCountryCode] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {}, [phone]);

  const changePhoneNo = value => {
    if (!phoneNo.isValidNumber()) {
      console.log('if ');
      //setCountryCode(...value, value);
      setPhone(value);
    } else {
      console.log('else ');
      onGetSmsCode();
    }
  };

  const onGetSmsCode = () => {
    setLoading(true);
    console.log('called');
    let params = {
      phone_number: country_code + phone,
    };
    console.log('called', params);

    let cbSuccuss = response => {
      setLoading(false);
      console.log(response);
      navigation.navigate('VerifyPhone', {
        phone: country_code + phone,
        getSmsCode: onGetSmsCode,
      });
    };
    let cbFailure = response => {
      setLoading(false);
      console.log(response);
    };
    dispatch(getSmsCode(params, cbSuccuss, cbFailure));
  };

  const selectCountry = country => {
    console.log('slectCountry:', phoneNo.selectCountry(country.cca2), country);
    updateInfo();
  };

  useEffect(() => {
    updateInfo();
  }, []);

  const updateInfo = () => {
    setCountryCode(phoneNo.getValue());
    console.log('valid=======: ', phoneNo.isValidNumber());
    console.log('type======: ', phoneNo.getNumberType());
    console.log('value======: ', phoneNo.getValue());
    console.log('countries=======: ', phoneNo.getAllCountries());
    console.log('selectCountry========: ', phoneNo.selectCountry());
  };
  const submitNumber = number => {
    console.log('[Phone-no]', number);
    setPhone(number);
    setDisabled(!phoneNo.isValidNumber());
    setValid(phoneNo.isValidNumber());
    if (phoneNo.isValidNumber()) {
      alert('Phone no is valid');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Verification</Text>
      </View>
      <Text style={styles.heading}>Put your mobile number</Text>
      <Text style={styles.subHeading}>We will send you an SMS to confirm</Text>
      <View style={{flexDirection: 'row'}}>
        <PhoneInput
          ref={ref => {
            phoneNo = ref;
          }}
          initialCountry="gb" //"ca"
          disabled={false}
          value={`${country_code}`}
          autoFormat={true}
          // textProps={{placeholder: '0513432342393', maxLength: 13}}
          textStyle={{color: 'black', fontSize: 16}}
          offset={10}
          pickerBackgroundColor={colors.lightColor}
          // textComponent={{ width: WP('78'), backgroundColor: 'red' }}
          flagStyle={{marginLeft: 0}}
          style={[
            styles.phoneContainer,
            {borderBottomColor: isValid ? colors.lightOrange : 'red'},
          ]}
          allowZeroAfterCountryCode={true}
          onSelectCountry={iso2 => selectCountry(iso2)}
          onChangePhoneNumber={number => changePhoneNo(number)}
          // onPressFlag={props.onPressFlag}
        />
        <CustomTextInput
          inputField={false}
          label={'Mobile Number'}
          value={phone}
          containerStyle={styles.textInputContainer}
          isPhoneInput
        />
      </View>

      <View style={styles.keyboardContainer}>
        <NumKeyboard
          onDone={() => onGetSmsCode()}
          getValue={value => changePhoneNo(value)}
        />
      </View>
      <Loader loading={loading} />
    </View>
  );
};

export default AddPhone;
