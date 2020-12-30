import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {appIcons} from '../../../services';
import {
  CustomTextInput,
  Button,
  Header,
  RangeSlider,
} from '../../../components';
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
  const _renderImageVertical = () => {
    return (
      <TouchableOpacity style={styles.imagePlaceHolderVertical}>
        <Image source={appIcons.imagePlaceHolder} />
      </TouchableOpacity>
    );
  };
  const _renderImageHorizontal = () => {
    return (
      <TouchableOpacity style={styles.imagePlaceHolderHorizontal}>
        <Image source={appIcons.imagePlaceHolder} />
      </TouchableOpacity>
    );
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
          {_renderImageHorizontal()}
          {_renderImageHorizontal()}
        </View>
      </View>
      <CustomTextInput containerStyle={styles.top} label={'Email'} />
      <CustomTextInput containerStyle={styles.top} label={'Phone number'} />
      <CustomTextInput containerStyle={styles.top} label={'Bio'} />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Job Field'}
        dropDown={true}
        isMultiSelect={true}
        dropDownListHeader={'Career Field'}
        itemList={careerFields}
      />
      <CustomTextInput containerStyle={styles.top} label={'Occupation'} />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Sports'}
        dropDown={true}
        isMultiSelect={true}
        dropDownListHeader={'Sports'}
        itemList={sports}
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
      <Button containerStyle={styles.doneButton} title={'Save alterations'} />
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
