/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Switch,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {styles} from './styles';
import {Header} from '../../../components';
import {colors} from '../../../services';

const notification = [
  {text: 'Receive notification of snak invites', isSelected: true},
  {text: 'Receive notification of meeting reminder', isSelected: true},
  {text: 'Receive notification of cancel meeting', isSelected: true},
  {text: 'Receive notification of delete meeting', isSelected: true},
  {text: 'Receive notification of meeting update', isSelected: true},
];
const Settings = () => {
  const _renderRow = ({text, isSelected}) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.text}>{text}</Text>
        <Switch
          value={isSelected}
          onValueChange={() => {}}
          thumbColor={
            Platform.OS === 'android'
              ? isSelected
                ? colors.primary
                : '#f4f3f4'
              : colors.white
          }
          trackColor={{false: '#707070',true: Platform.OS === 'android' ? colors.backgroundSwitch: colors.primary}}
          style={{transform: [{scaleX: 1}, {scaleY: 1}]}}
        />
      </View>
    );
  };

  const _renderHideProfile = () => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.text}>Hide your profile</Text>
        <Switch
          value={true}
          onValueChange={() => {}}
          thumbColor={
              Platform.OS === 'android'
              ? true
                  ? colors.primary
                  : '#f4f3f4'
                  : colors.white
          }
          trackColor={{false: '#707070', true: Platform.OS === 'android' ? colors.backgroundSwitch : colors.primary}}
          style={{transform: [{scaleX: 1}, {scaleY: 1}]}}
        />
      </View>
    );
  };
  return (
    <View style={styles.flex}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header title={'Settings'} showLeftIcon={true} />
        <Text style={[styles.headings, styles.top]}>Notifications</Text>
        {notification.map(item => _renderRow(item))}
        <View style={styles.space} />
        <Text style={[styles.headings]}>Connections</Text>
        {_renderHideProfile()}
        <Text style={styles.textDanger}>Blocked Accounts</Text>
        <View style={styles.space} />
        <Text style={[styles.headings]}>Subscriptions</Text>
        <Text style={styles.textDanger}>Manage subscription</Text>
        <View style={styles.space} />
        <Text style={[styles.headings]}>Privacy</Text>
        <Text style={styles.textDanger}>Delete account</Text>
      </ScrollView>
      <TouchableOpacity style={styles.bottomContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.textSignOutDanger}>Sign out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
