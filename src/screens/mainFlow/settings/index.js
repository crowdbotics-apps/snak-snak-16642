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
import {
  getSettings,
  logoutRequest,
  deleteAccountRequest,
} from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {CommonActions} from '@react-navigation/routers';

const notification = [
  {
    text: 'Receive notification of snak invites',
    isSelected: false,
    id: 0,
    key: 'notify_snak_invites',
  },
  {
    text: 'Receive notification of meeting reminder',
    isSelected: false,
    id: 1,
    key: 'notify_meeting_reminder',
  },
  {
    text: 'Receive notification of cancel meeting',
    isSelected: false,
    id: 2,
    key: 'notify_canceled_meeting',
  },
  {
    text: 'Receive notification of delete meeting',
    isSelected: false,
    id: 3,
    key: 'notify_deleted_meeting',
  },
  {
    text: 'Receive notification of meeting update',
    isSelected: false,
    id: 4,
    key: 'notify_meeting_update',
  },
];

const Settings = ({navigation}) => {
  const dispatch = useDispatch();
  const {token, user} = useSelector(state => state.login);
  const {settings} = useSelector(state => state.setting);

  const [notifySetting, setNotifySetting] = useState(notification);
  const [updateParams, setUpdateParams] = useState({});

  //get setting
  useEffect(() => {
    if (token && user) {
      onGetSetting();
    }
    console.log('Setting Screen----', user, token);
  }, [user]);

  const onGetSetting = () => {
    const cbSuccess = response => {
      console.log('Settings----', response, '/n', user, token);
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
    dispatch(getSettings({}, token, cbSuccess, cbFailure, 'get'));
  };

  useEffect(() => {
    //  console.log(notifySetting);
    const params = {};
    notifySetting.forEach(item => {
      params[item.key] = item.isSelected;
    });
    // console.log(params);
    setUpdateParams(params);
  }, [notifySetting]);

  const _renderRow = ({text, isSelected, id}) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.text}>{text}</Text>
        <Switch
          value={isSelected}
          onValueChange={() => onUpdateSetting(id)}
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

  const onUpdateSetting = id => {
    notifySetting.forEach(item => {
      if (id === item.id) {
        settings[item.key] = !item.isSelected;
      }
    });
    console.log('params', settings);
    const cbSuccess = response => {
      console.log('Update = Settings', response);
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
    dispatch(getSettings(settings, token, cbSuccess, cbFailure, 'put'));
  };

  const onLogout = () => {
    const cbSuccess = () => {
      alert('Logut Success');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Launch'}],
        }),
      );
    };
    const cbFailure = () => {
      alert('Server Error');
    };
    dispatch(logoutRequest({}, token, cbSuccess, cbFailure));
  };

  const onDeleteAccount = () => {
    const cbSuccess = () => {
      alert('Delete Account Success');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Launch'}],
        }),
      );
    };
    const cbFailure = () => {
      alert('Server Error. Try Again');
    };
    dispatch(deleteAccountRequest({}, token, cbSuccess, cbFailure));
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
        <TouchableOpacity onPress={onDeleteAccount}>
          <Text style={styles.textDanger}>Delete account</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity onPress={onLogout} style={styles.bottomContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.textSignOutDanger}>Sign out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
