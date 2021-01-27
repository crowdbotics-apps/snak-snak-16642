/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles';
import {Header, CustomTextInput, ProfileCard, Loader} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getLabels, userSearchRequest} from '../../../redux/actions';
import axios from 'axios';
import { colors, size, WP } from '../../../services';

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
  ['Agriculture', 'agriculture'],
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
  ['IT', 'IT'],
  ['Sports', 'Sports'],
];

const adventurePref = [
  'Professional Snak',
  'Friendly Snak',
  'Active Snak',
  'Romantic Snak',
];
const Search = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [showHideTime, setShowHideTime] = useState(false);
  const [showHideAdventure, setShowHideAdventrue] = useState(false);
  const [showHideSport, setShowHideSport] = useState(false);
  const [showHideCareer, setShowHideCareer] = useState(false);

  const [timePreference, setTimePreference] = useState('');
  const [adventurePreference, setAdventurePreference] = useState('');
  const [sportsPreference, setSportsPreference] = useState('');
  const [careerPreference, setCareerPreference] = useState('');

  const [jobField, setJobField] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [showCareerFilter, setCareerFilter] = useState(true);
  const [showSportsFilter, setSportsFilter] = useState(false);

  const dispatch = useDispatch();
  const {token} = useSelector(state => state.login);
  const {labels} = useSelector(state => state.labels);
  useEffect(() => {
    const cbSuccess = response => {
      console.log('this is cb cbsuccess', response);
    };
    dispatch(getLabels(cbSuccess));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const onSelectValue = (val) => {
    console.log('[selected-jobs]', val);
    let data = {jobs: val};
    setLoader(true);
    const cbSuccess = response => {
      if (response.status === 200) {
        setSearchResult(response.data);
      } else {
        setSearchResult([]);
      }
      setLoader(false);
      console.log('[this is cb cbSuccess]', response);
    };
    const cbFailure = error => {
      setLoader(false);
      setSearchResult([]);
      console.log('this is cbFailure', error);
    };
    dispatch(userSearchRequest(data, token, cbSuccess, cbFailure));
  }
  
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
            itemList={labels?.jobs}
            getVal={val => onSelectValue(val)}
            // getVal={val => setJobField(val)}
          />
        )}
      </>
    );
  };
  const renderItem = ({item, index}) => {
    return(
      <ProfileCard
        key={index}
        image={item.user_profile_image.length > 0 ? item.user_profile_image[0].image : 'https://picsum.photos/seed/picsum1/300/300'}
        name={item.name}
        age={item.age_preferred}
        profession={item.ocuppation}
        status={item.preferred_expertise_level}
        distance={item.distance_preferred + ' miles away'}
        viewProfile={() => navigation.navigate('othersProfile',{item})}
      />  
    )
  }
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
            onLeftIconPress={() => navigation.toggleDrawer()}
          />
          {/* {_renderFilter(
            'Time preference',
            showHideTime,
            setShowHideTime,
            timePref,
            setTimePreference,
            false,
          )} */}
          {/* <View style={styles.space} /> */}
          {/* {_renderFilter(
            'Adventure preference',
            showHideAdventure,
            setShowHideAdventrue,
            adventurePref,
            setAdventurePreference,
            false,
          )} */}
          {/* <View style={styles.space} /> */}
          {/* {showSportsFilter &&
            _renderFilter(
              'Sports preference',
              showHideSport,
              setShowHideSport,
              sports,
              setSportsPreference,
              true,
            )} */}
          {showSportsFilter && <View style={styles.space} />}
          {!showCareerFilter &&
            _renderFilter(
              'Career Field',
              showHideCareer,
              setShowHideCareer,
              careerFields,
              setCareerPreference,
              true,
            )}
          {showCareerFilter && <View style={styles.space} />}
        </View>
        <View style={styles.list}>
          {
            loader ? 
              <Loader loading={loader} />
              :
              searchResult.length > 0 ? 
                <FlatList
                  data={searchResult}
                  renderItem={renderItem}
                  keyExtractor={this.extractItemKey}
                /> 
                : <Text style={styles.placeholderColor}>Result Not Found!</Text>
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
