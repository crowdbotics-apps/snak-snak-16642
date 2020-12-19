/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
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
import {getSettings} from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const notification = [
  {
    text: 'Receive notification of snak invites',
    isSelected: true,
    id: 0,
    key: 'notify_snak_invites',
  },
  {
    text: 'Receive notification of meeting reminder',
    isSelected: true,
    id: 1,
    key: 'notify_meeting_reminder',
  },
  {
    text: 'Receive notification of cancel meeting',
    isSelected: true,
    id: 2,
    key: 'notify_canceled_meeting',
  },
  {
    text: 'Receive notification of delete meeting',
    isSelected: true,
    id: 3,
    key: 'notify_deleted_meeting',
  },
  {
    text: 'Receive notification of meeting update',
    isSelected: true,
    id: 4,
    key: 'notify_meeting_update',
  },
];

const Settings = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.login);

  const [notifySetting, setNotifySetting] = useState(notification);

  //get setting
  useEffect(() => {
    onGetSetting();
  }, []);

  const onGetSetting = () => {
    const cbSuccess = response => {
      console.log('Settings', response);
      setNotifySetting(
        notifySetting.map(item => {
          return {
            ...item,
            isSelected: response[item.key],
          };
        }),
      );
    };
    const cbFailure = () => {};
    dispatch(getSettings({}, token, cbSuccess, cbFailure));
  };

  useEffect(() => {
    console.log(notifySetting);
  }, [notifySetting]);

  const _renderRow = ({text, isSelected, id}) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.text}>{text}</Text>
        <Switch
          value={isSelected}
          onValueChange={() => onSettingToggle(id)}
          thumbColor={
            Platform.OS === 'android'
              ? isSelected
                ? colors.primary
                : '#f4f3f4'
              : colors.white
          }
          trackColor={{
            false: '#707070',
            true:
              Platform.OS === 'android'
                ? colors.backgroundSwitch
                : colors.primary,
          }}
          style={{transform: [{scaleX: 1}, {scaleY: 1}]}}
        />
      </View>
    );
  };

  useEffect(() => {}, [notifySetting]);

  const onSettingToggle = id => {
    setNotifySetting(
      notifySetting.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        }
        return item;
      }),
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
          trackColor={{
            false: '#707070',
            true:
              Platform.OS === 'android'
                ? colors.backgroundSwitch
                : colors.primary,
          }}
          style={{transform: [{scaleX: 1}, {scaleY: 1}]}}
        />
      </View>
    );
  };
  return (
    <View style={styles.flex}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header
          onLeftIconPress={() => navigation.navigate('Search')}
          title={'Settings'}
          showLeftIcon={true}
        />
        <Text style={[styles.headings, styles.top]}>Notifications</Text>
        {notifySetting.map(item => _renderRow(item))}
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
