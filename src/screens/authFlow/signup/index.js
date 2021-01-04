import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
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

const genderPreference = ['Male', 'Female', 'Both'];
const expertiseLevel = ['Beginner', 'Intermediate', 'Advanced'];
const sports = [
  'Baseball',
  'Basketball',
  'Cycling',
  'Dodgeball',
  'Fishing',
  'Football',
  'Golf',
  'Hiking',
  'Mountain Biking',
  'Racquetball',
  'Skiing / Snowboarding',
  'Soccer',
  'Tennis',
  'Volleyball',
];

const careerFields = [
  'Agriculture',
  'Business and Administration',
  'Communications',
  'Community & Social Services',
  'Construction',
  'Culture & Entertainment',
  'Education',
  'Emergency Services',
  'Government',
  'Health & Wellness',
  'Hospitality & Travel',
  'Law',
  'Medical',
  'Sales',
  'Science & Technology',
  'Sports',
];

const Signup = ({navigation}) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhoneNo] = useState('');
  const [bio, setBio] = useState('');
  const [occupation, setOccupation] = useState('');
  const [jobField, setJobField] = useState('');
  const [sports, setSports] = useState('');
  const [expertiseLevel, setExpertiselevel] = useState('');
  const [prefExperLevel, serPrefExperLevel] = useState('');
  const [genderPref, setGenderPref] = useState('');
  const [romanGenderPref, setRomanGenderPref] = useState('');
  const [distancePref, setDistancePref] = useState('');
  const [loading, setLoading] = useState(false);

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
    if (phone === '') {
      alert('Please enter phone like +92301XXXXXXXX');
      return;
    }
    setLoading(true);
    var data = JSON.stringify({
      name: 'Usama Asghar',
      bio: 'Dummy text',
      job_field: '1994-02-25',
      ocuppation: 'TEST',
      expertise_level: 'beginner',
      preferred_expertise_level: 'beginner',
      gender_preference: 'female',
      phone_number: phone,
      age_preferred: 29,
      distance_preferred: 100,
      user_sports: [{sports: 'baseball'}, {sports: 'basketball'}],
      user_profile_image: [
        {
          image:
            'data:image/png;base64,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',
        },
        {
          image:
            'data:image/png;base64,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',
        },
      ],
    });

    var config = {
      method: 'post',
      url: 'http://snak-snak-16642.botics.co/api/v1/signup/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        setLoading(false);
        setTimeout(() => {
          alert('Sign up success');
        }, 1000);
        navigation.navigate('Settings');
        console.log(JSON.stringify(response.data));
      })
      .catch(function(error) {
        setLoading(false);
        setTimeout(() => {
          alert(error);
        }, 1000);
        console.log(error);
      });
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
        label={'Email'}
        value={email}
        getVal={text => setEmail(text)}
      />
      <CustomTextInput
        value={phone}
        getVal={text => setPhoneNo(text)}
        containerStyle={styles.top}
        label={'Phone number'}
      />
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
        isMultiSelect={true}
        dropDownListHeader={'Career Field'}
        itemList={careerFields}
        getVal={val => console.log(val)}
      />
      <CustomTextInput containerStyle={styles.top} label={'Occupation'} />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Sports'}
        dropDown={true}
        isMultiSelect={true}
        dropDownListHeader={'Sports'}
        itemList={sports}
        getVal={val => setSports(val)}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Expertise level'}
        dropDown={true}
        itemList={expertiseLevel}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'My preferred expertise level'}
        dropDown={true}
        itemList={expertiseLevel}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Gender preference'}
        dropDown={true}
        itemList={genderPreference}
      />
      <Text style={[styles.headings, styles.top]}>Romantic age preference</Text>
      <View style={styles.rangeSlider}>
        <RangeSlider />
      </View>

      <View style={styles.row}>
        <Text style={[styles.headings, styles.top]}>Distance preference</Text>
        <Text style={[styles.labelRange, styles.top]}>0KM - 1000 KM</Text>
      </View>
      <View style={styles.rangeSlider}>
        <RangeSlider />
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
