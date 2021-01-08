import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {appIcons, HP, WP} from '../../../services';
import {
  CustomTextInput,
  Button,
  Header,
  RangeSlider,
  Loader,
} from '../../../components';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import PhoneInput from 'react-native-phone-input';
import {colors} from '../../../services';
import {signUpRequst, getLabels} from '../../../redux/actions';

const careerFields = [
  ['Agriculture', 'Agriculture'],
  ['Business and Administration', 'Business and Administration'],
  ['Communications', 'Communications'],
  ['Community & Social Services', 'Community & Social Services'],
  ['Construction', 'Construction'],
  ['Culture & Entertainment', 'Culture & Entertainment'],
  ['Education', 'Education'],
  ['Emergency Services', 'Emergency Services'],
  ['Government', 'Government'],
  ['Health & Wellness', 'Health & Wellness'],
  ['Hospitality & Travel', 'Hospitality & Travel'],
  ['Law', 'Law'],
  ['Medical', 'Medical'],
  ['Sales', 'Sales'],
  ['Science & Technology', 'Science & Technology'],
  ['Sports', 'Sports'],
];

const Signup = ({navigation}) => {
  let phoneNo = useRef(null);
  const dispatch = useDispatch();

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country_code, setCountryCode] = useState('');
  const [isValid, setValid] = useState(true);
  const [bio, setBio] = useState('');
  const [occupation, setOccupation] = useState('');
  const [jobField, setJobField] = useState('');
  const [selectedSports, setSelectedSports] = useState('');
  const [selectedExpertiseLevel, setSelectedExpertiseLevel] = useState('');
  const [prefExperLevel, serPrefExperLevel] = useState('');
  const [genderPref, setGenderPref] = useState('');
  const [romanGenderPref, setRomanGenderPref] = useState('');
  const [distancePref, setDistancePref] = useState('');
  const [loading, setLoading] = useState(false);
  const {signupObj} = useSelector(state => state.login);
  const {labels} = useSelector(state => state.labels);

  useEffect(() => {}, [phone]);

  const _renderImageVertical = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          ImagePicker.showImagePicker(
            {
              mediaType: 'photo',
              includeBase64: true,
              maxHeight: 200,
              maxWidth: 200,
            },
            response => {
              setImage1(response);
            },
          )
        }
        style={styles.imagePlaceHolderVertical}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: image1 ? WP(43.6) : 50,
            height: image1 ? HP(30) : 50,
            borderRadius: WP(2),
          }}
          source={image1 ? {uri: image1.uri} : appIcons.imagePlaceHolder}
        />
      </TouchableOpacity>
    );
  };
  const _renderImageHorizontal = key => {
    return (
      <TouchableOpacity
        onPress={() =>
          ImagePicker.showImagePicker(
            {
              mediaType: 'photo',
              includeBase64: true,
              maxHeight: 200,
              maxWidth: 200,
            },
            response => {
              console.log(response);
              if (key === 2) {
                setImage2(response);
              } else {
                setImage3(response);
              }
            },
          )
        }
        style={styles.imagePlaceHolderHorizontal}>
        {key === 2 ? (
          <Image
            // resizeMode={'contain'}
            style={{
              width: image2 ? WP(43.6) : 50,
              height: image2 ? HP(13.6) : 50,
              borderRadius: WP(2),
            }}
            source={image2 ? {uri: image2.uri} : appIcons.imagePlaceHolder}
          />
        ) : (
          <Image
            style={{
              width: image3 ? WP(43.6) : 50,
              height: image3 ? HP(13.6) : 50,
              borderRadius: WP(2),
            }} //resizeMode={'contain'}
            source={image3 ? {uri: image3.uri} : appIcons.imagePlaceHolder}
          />
        )}
      </TouchableOpacity>
    );
  };

  const onSignUp = () => {
    if (image1 && image2 && image3) {
      let images = [];
      images.push({
        image: `data:${image1.type};base64,` + image1.data,
      });
      images.push({
        image: `data:${image2.type};base64,` + image2.data,
      });
      images.push({
        image: `data:${image3.type};base64,` + image3.data,
      });
      signupObj.user_profile_image = images;
    } else {
      Alert.alert('Images Missing', 'All 3 images are required');
      return;
    }

    if (email.length > 2) {
      signupObj.name = email;
    } else {
      Alert.alert('Invalid Name', 'Please enter name');
      return;
    }

    if (phone) {
      signupObj.phone_number = phone;
    } else {
      Alert.alert('Invalid Phone Number', 'Please enter valid phone number');
      return;
    }

    if (bio?.length > 3) {
      signupObj.bio = bio;
    } else {
      Alert.alert('Invalid Bio', 'Please enter valid bio');
      return;
    }

    if (jobField) {
      signupObj.job_field = jobField;
    } else {
      Alert.alert('Invalid Job Field', 'Please enter valid job field');
      return;
    }
    if (occupation?.length > 3) {
      signupObj.ocuppation = occupation;
    } else {
      Alert.alert('Invalid Bio', 'Please enter occupation');
      return;
    }

    if (selectedSports?.length > 0) {
      let tempSports = [];
      selectedSports.map(item => {
        tempSports.push({
          sports: item,
        });
      });
      signupObj.user_sports = tempSports;
    } else {
      Alert.alert('Invalid Sport', 'Please select at least one sport');
      return;
    }

    if (selectedExpertiseLevel) {
      signupObj.expertise_level = selectedExpertiseLevel;
    } else {
      Alert.alert('Invalid Expertise Level', 'Please select expertise level');
      return;
    }

    if (prefExperLevel) {
      signupObj.preferred_expertise_level = prefExperLevel;
    } else {
      Alert.alert(
        'Invalid Preferred Expertise Level',
        'Please select Preferred expertise level',
      );
      return;
    }

    if (genderPref) {
      signupObj.gender_preference = genderPref;
    } else {
      Alert.alert(
        'Invalid Gender Preference',
        'Please select gender preference',
      );
      return;
    }

    if (romanGenderPref) {
      signupObj.age_preferred = romanGenderPref[1];
    } else {
      Alert.alert('Invalid Preferred Age', 'Please select preferred age');
      return;
    }

    if (distancePref) {
      signupObj.distance_preferred = distancePref[1];
    } else {
      Alert.alert(
        'Invalid Preferred Distance',
        'Please select preferred distance',
      );
      return;
    }

    console.log(signupObj);
    setLoading(true);
    const cbSuccess = res => {
      setLoading(false);
      Alert.alert('', 'User signup successful');
    };
    const cbFailure = res => {
      setLoading(false);
      console.log("yeh to daikhooo o o ",res);
      setTimeout(() => {
        Alert.alert('Fail to signup', res);
      }, 1000);
    };
    dispatch(signUpRequst(signupObj, cbSuccess, cbFailure));
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

  const changePhoneNo = value => {
    if (!phoneNo.isValidNumber()) {
      console.log('if ');
      //setCountryCode(...value, value);
      setPhone(value);
    } else {
      console.log('else ');
      setPhone(value);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header
        title={'Signup'}
        onLeftIconPress={() => navigation.navigate('Settings')}
        showLeftIcon={false}
      />
      <View style={[styles.imageContainer, styles.top]}>
        {_renderImageVertical()}
        <View style={styles.horizontalImage}>
          {_renderImageHorizontal(2)}
          {_renderImageHorizontal(3)}
        </View>
      </View>
      <CustomTextInput
        containerStyle={styles.top}
        label={'Name'}
        value={email}
        getVal={text => setEmail(text)}
      />
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
          value={phone}
          getVal={text => setPhone(text)}
          containerStyle={styles.textInputContainer}
          label={'Phone number'}
          keyboardType={'number-pad'}
        />
      </View>

      <CustomTextInput
        value={bio}
        getVal={text => setBio(text)}
        containerStyle={styles.top}
        label={'Bio'}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Job Field'}
        dropDown={true}
        value={jobField}
        isMultiSelect={false}
        dropDownListHeader={'Career Field'}
        itemList={careerFields}
        getVal={val => setJobField(val)}
      />
      <CustomTextInput
        containerStyle={styles.top}
        getVal={val => setOccupation(val)}
        label={'Occupation'}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Sports'}
        dropDown={true}
        isMultiSelect={true}
        dropDownListHeader={'Sports'}
        itemList={labels?.sports}
        showMultiSelectValues={true}
        getVal={val => setSelectedSports(val)}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Expertise level'}
        dropDown={true}
        itemList={labels?.expertise_level}
        getVal={val => setSelectedExpertiseLevel(val)}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'My preferred expertise level'}
        dropDown={true}
        itemList={labels?.expertise_level}
        getVal={val => serPrefExperLevel(val)}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Gender preference'}
        dropDown={true}
        itemList={labels?.gender_preference}
        getVal={val => setGenderPref(val)}
      />
      <Text style={[styles.headings, styles.top]}>Romantic age preference</Text>
      <View style={styles.rangeSlider}>
        <RangeSlider
          onValuesChange={values => {
            console.log(values);
            setRomanGenderPref(values);
          }}
        />
      </View>

      <View style={styles.row}>
        <Text style={[styles.headings, styles.top]}>Distance preference</Text>
        <Text style={[styles.labelRange, styles.top]}>0KM - 1000 KM</Text>
      </View>
      <View style={styles.rangeSlider}>
        <RangeSlider
          range={[0, 1000]}
          onValuesChange={values => {
            console.log(values);
            setDistancePref(values);
          }}
        />
      </View>

      <Button
        containerStyle={styles.doneButton}
        title={'Save alterations'}
        onPress={onSignUp}
      />
      <Loader loading={loading} />
    </ScrollView>
  );
};

export default Signup;

// import React from 'react';
// import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
// import {styles} from './styles';
// import {appIcons} from '../../../services';
// import {CustomTextInput, Button} from '../../../components';

// const genderList = ['Male', 'Female'];
// const imAvailable = [
//   'Professional Snak',
//   'Friendly Snak',
//   'Active Snak',
//   'Romantic Snak',
// ];
// const genderPreference = ['Male', 'Female', 'Both'];
// const timePreference = [
//   'Brunch (9AM - 12PM)',
//   'Lunch (12PM - 3PM)',
//   'Happy Hour (3PM - 6PM)',
//   'Dinner (6PM - 10PM)',
//   'Late night (10PM +)',
// ];

// const Signup = () => {
//   const _renderImage = () => {
//     return (
//       <TouchableOpacity style={styles.imagePlaceHolder}>
//         <Image source={appIcons.imagePlaceHolder} />
//       </TouchableOpacity>
//     );
//   };

//   const onSignup = () => {
//     alert('Sign up');
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.titleContainer}>
//         <Text style={styles.title}>Signup</Text>
//       </View>
//       <Text style={styles.heading}>Upload up to three photos</Text>
//       <View style={[styles.imageContainer, styles.top]}>
//         {_renderImage()}
//         {_renderImage()}
//         {_renderImage()}
//       </View>
//       <CustomTextInput containerStyle={styles.top} label={'Name'} />
//       <View style={[styles.row, styles.top]}>
//         <CustomTextInput
//           containerStyle={styles.halfWidth}
//           dropDown={true}
//           label={'Gender'}
//           itemList={genderList}
//         />
//         <CustomTextInput containerStyle={styles.halfWidth} label={'Birthday'} />
//       </View>
//       <CustomTextInput
//         containerStyle={styles.top}
//         label={'Gender Preference'}
//         dropDown={true}
//         itemList={genderPreference}
//       />
//       <CustomTextInput
//         containerStyle={styles.top}
//         label={"I'm available to"}
//         dropDown={true}
//         itemList={imAvailable}
//       />
//       <CustomTextInput
//         containerStyle={styles.top}
//         label={'My time preference to meet'}
//         dropDown={true}
//         itemList={timePreference}
//       />
//       <CustomTextInput
//         containerStyle={styles.top}
//         label={'Career field'}
//         dropDown={true}
//       />
//       <CustomTextInput
//         containerStyle={styles.top}
//         label={'Sports preference'}
//         dropDown={true}
//       />
//       <Button
//         containerStyle={styles.doneButton}
//         title={'Done'}
//         onPress={onSignup}
//       />
//     </ScrollView>
//   );
// };

// export default Signup;
