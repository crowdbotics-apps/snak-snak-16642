import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {appIcons} from '../../../services';
import {CustomTextInput, Button} from '../../../components';

const genderList = ['Male', 'Female'];
const imAvailable = [
  'Professional Snak',
  'Friendly Snak',
  'Active Snak',
  'Romantic Snak',
];
const genderPreference = ['Male', 'Female', 'Both'];
const timePreference = [
  'Brunch (9AM - 12PM)',
  'Lunch (12PM - 3PM)',
  'Happy Hour (3PM - 6PM)',
  'Dinner (6PM - 10PM)',
  'Late night (10PM +)',
];

const Signup = () => {
  const _renderImage = () => {
    return (
      <TouchableOpacity style={styles.imagePlaceHolder}>
        <Image source={appIcons.imagePlaceHolder} />
      </TouchableOpacity>
    );
  };

  const onSignup = () => {
    alert('Sign up');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Signup</Text>
      </View>
      <Text style={styles.heading}>Upload up to three photos</Text>
      <View style={[styles.imageContainer, styles.top]}>
        {_renderImage()}
        {_renderImage()}
        {_renderImage()}
      </View>
      <CustomTextInput containerStyle={styles.top} label={'Name'} />
      <View style={[styles.row, styles.top]}>
        <CustomTextInput
          containerStyle={styles.halfWidth}
          dropDown={true}
          label={'Gender'}
          itemList={genderList}
        />
        <CustomTextInput containerStyle={styles.halfWidth} label={'Birthday'} />
      </View>
      <CustomTextInput
        containerStyle={styles.top}
        label={'Gender Preference'}
        dropDown={true}
        itemList={genderPreference}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={"I'm available to"}
        dropDown={true}
        itemList={imAvailable}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'My time preference to meet'}
        dropDown={true}
        itemList={timePreference}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Career field'}
        dropDown={true}
      />
      <CustomTextInput
        containerStyle={styles.top}
        label={'Sports preference'}
        dropDown={true}
      />
      <Button
        containerStyle={styles.doneButton}
        title={'Done'}
        onPress={onSignup}
      />
    </ScrollView>
  );
};

export default Signup;
