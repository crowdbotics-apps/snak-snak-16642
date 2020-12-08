/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Header, CustomTextInput, ProfileCard} from '../../../components';

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

const timePref = [
  'Breakfast (6AM-9AM)',
  'Brunch (9AM - 12PM)',
  'Lunch (12PM - 3PM)',
  'Happy Hour (3PM - 6PM)',
  'Dinner (6PM - 10PM)',
  'Late night (10PM +)',
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

const adventurePref = [
  'Professional Snak',
  'Friendly Snak',
  'Active Snak',
  'Romantic Snak',
];
const Search = ({navigation}) => {
  const [showHideTime, setShowHideTime] = useState(false);
  const [showHideAdventure, setShowHideAdventrue] = useState(false);
  const [showHideSport, setShowHideSport] = useState(false);
  const [showHideCareer, setShowHideCareer] = useState(false);

  const [timePreference, setTimePreference] = useState('');
  const [adventurePreference, setAdventurePreference] = useState('');
  const [sportsPreference, setSportsPreference] = useState('');
  const [careerPreference, setCareerPreference] = useState('');

  const [showCareerFilter, setCareerFilter] = useState(false);
  const [showSportsFilter, setSportsFilter] = useState(true);

  useEffect(() => {
    if (adventurePreference === 'Professional Snak') {
      setCareerFilter(true);
      setSportsFilter(false);
    } else if (
      adventurePreference === 'Friendly Snak' ||
      adventurePreference === 'Romantic Snak'
    ) {
      setCareerFilter(false);
      setSportsFilter(false);
    } else {
      setCareerFilter(false);
      setSportsFilter(true);
    }
  }, [adventurePreference]);
  const _renderFilter = (
    title,
    visibleState,
    setVisibleState,
    list,
    setState,
    isMultiSelect,
  ) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => setVisibleState(prev => !prev)}
          style={styles.filterContainer}>
          <Text style={styles.filterTitle}>{title}</Text>
          <View style={styles.filterIconContainer}>
            <Text style={styles.buttonSign}>{visibleState ? '-' : '+'}</Text>
          </View>
        </TouchableOpacity>
        {visibleState && (
          <CustomTextInput
            containerStyle={styles.customTextInput}
            dropDown={true}
            dropDownListHeader={title}
            showMultiSelectValues={isMultiSelect}
            isMultiSelect={isMultiSelect}
            itemList={list}
            getVal={setState}
          />
        )}
      </>
    );
  };
  return (
    <View style={styles.flex}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        stickyHeaderIndices={[0]}>
        <View style={styles.stickyContainer}>
          <Header
            title={'Who is Available'}
            showLeftIcon={true}
            onLeftIconPress={() => navigation.navigate('RecieveInvite')}
          />
          {_renderFilter(
            'Time preference',
            showHideTime,
            setShowHideTime,
            timePref,
            setTimePreference,
            false,
          )}
          <View style={styles.space} />
          {_renderFilter(
            'Adventure preference',
            showHideAdventure,
            setShowHideAdventrue,
            adventurePref,
            setAdventurePreference,
            false,
          )}
          <View style={styles.space} />
          {showSportsFilter &&
            _renderFilter(
              'Sports preference',
              showHideSport,
              setShowHideSport,
              sports,
              setSportsPreference,
              true,
            )}
          {showSportsFilter && <View style={styles.space} />}
          {showCareerFilter &&
            _renderFilter(
              'Career Field',
              showHideCareer,
              setShowHideCareer,
              careerFields,
              setSportsPreference,
              true,
            )}
          {showCareerFilter && <View style={styles.space} />}
        </View>
        <View style={styles.list}>
          <ProfileCard
            image={'https://picsum.photos/seed/picsum1/300/300'}
            name={'Nicola'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum2/300/300'}
            name={'Barbra'}
            age={'20'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum3/300/300'}
            name={'Amy'}
            age={'27'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum4/300/300'}
            name={'Lua'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum5/300/300'}
            name={'Beth'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum6/300/300'}
            name={'Nicola'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum7/300/300'}
            name={'Nicola'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum8/300/300'}
            name={'Barbra'}
            age={'20'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum9/300/300'}
            name={'Amy'}
            age={'27'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum10/300/300'}
            name={'Lua'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum11/300/300'}
            name={'Beth'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum12/300/300'}
            name={'Nicola'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
