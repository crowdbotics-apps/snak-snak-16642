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

const EditProfile = ({navigation}) => {
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
        title={'Edit Profile'}
        onLeftIconPress={() => navigation.navigate('Settings')}
        showLeftIcon={true}
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

export default EditProfile;
