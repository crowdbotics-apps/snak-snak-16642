import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getInvitDetailRequest, acceptInvitationRequest} from '../../../redux/actions';
import {CommonActions} from '@react-navigation/native';
import {styles} from './styles';
import {
  Header,
  CustomTextInput,
  ProfileCard,
  EditTextInput,
  Button,
  AcceptInvitePopup,
  DeclineInvitePopup,
} from '../../../components';
import {colors, HP, WP} from '../../../services';

const RecieveInvite = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.login);

  const [loading, setLoading] = useState(false);
  const [acceptPopup, setAcceptPopup] = useState(false);
  const [declinePopup, setDeclinePopup] = useState(false);
  const [invitation, setInvitation] = useState(null);
  const {invitation_id} = route.params;
  console.log('[[[[invitation_id]]]]', invitation_id);

  useEffect(() => {
    setLoading(true);
    const cbSuccess = (data) => {
      setLoading(false);
      setInvitation(data);
      console.log('invitation-detail-success', data);
    }
    const cbFailure = (error) => {
      setLoading(false);
      console.log('invitation-detail-failure', error);
    }
    dispatch(getInvitDetailRequest({invitation_id: invitation_id}, token, cbSuccess, cbFailure));
  }, [route.params]);

  const sendInvitation = (status = 0) => {
      setLoading(true);
    const cbSuccess = (data) => {
      setLoading(false);
      if (data.room_id) {
        setAcceptPopup(true);
      } else {
        setDeclinePopup(true)
      }
    }
    const cbFailure = (error) => {
      setLoading(false);
    }
    let params = {
      invitation_id: invitation_id,
      status: status,
    }
    dispatch(acceptInvitationRequest(params, token, cbSuccess, cbFailure));
  }

  navigateToScreen = (screen) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: screen}],
      }),
    );
  }

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator colors={'black'} />
      </View>
    );
  }
  return (
    <View style={styles.flex}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.stickyContainer}>
          <Header
            title={'You are invited!'}
            showLeftIcon={true}
            isBack={true}
            onLeftIconPress={() => navigation.goBack()}
          />
          <Text style={styles.filterTitle}>
            {invitation?.invited_user?.name}
            <Text style={styles.simpleText}> invited you to an event</Text>
          </Text>
          <View style={styles.spacer} />
          <ProfileCard
            image={invitation?.invited_user?.user_profile_image[0]?.image || 'https://picsum.photos/seed/picsum3/300/300'}
            name={invitation?.invited_user?.name}
            age={invitation?.invited_user?.age_preferred}
            profession={invitation?.invited_user?.user_jobs[0]?.job_field}
            status={invitation?.invited_user?.ocuppation}
            distance={`${invitation?.invited_user?.distance_preferred} miles away`}
            backgroundColor={colors.gray_4}
          />
          <View style={[styles.spacer, {marginTop: HP('1')}]} />
          <EditTextInput
            disable={true}
            containerStyle={styles.customTextInput}
            dropDown={true}
            dropDownListHeader={'Place'}
            label={'Place'}
            editable
            value={invitation?.place}
            editBackColor={colors.gray_4}
          />
          <View style={styles.inputRow}>
            <View style={styles.inputRow1}>
              <EditTextInput
                disable={true}
                containerStyle={styles.customTextInput}
                dropDown={true}
                dropDownListHeader={'Place'}
                label={'Date'}
                editable
                value={invitation?.date}
                editBackColor={colors.gray_4}
                row
              />
            </View>
            <View style={styles.inputRow2}>
              <EditTextInput
                disable={true}
                containerStyle={styles.customTextInput}
                dropDown={true}
                dropDownListHeader={'Place'}
                label={'Time'}
                editable
                value={invitation?.time}
                editBackColor={colors.gray_4}
                row
              />
            </View>
          </View>

          <View style={styles.spacer} />
          <CustomTextInput
            label={'Message'}
            value={invitation?.message}
            editBackColor={colors.gray_4}
            editable
          />
          <View style={styles.spacer} />
          <Text style={styles.simpleText}>
            {`${invitation?.invited_user?.name} will`}
            <Text style={[styles.filterTitle, {color: colors.green}]}>
              {' '}
              pickup{' '}
            </Text>
            the tab
          </Text>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          {/* <CustomTextInput label={'Your Response'} value={''} /> */}
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.buttonRow}>
            <View style={styles.buttonRow1}>
              <Button
                title={'Accept'}
                onPress={() => sendInvitation(1)}
              />
            </View>
            <View style={styles.buttonRow2}>
              <Button
                title={'Decline'}
                backgroundColor={colors.white}
                textColor={colors.black_1}
                containerStyle={styles.buttonStyle}
                onPress={() => sendInvitation(0)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <AcceptInvitePopup
        showModal={acceptPopup}
        close={() => {
          setAcceptPopup(false);
          navigateToScreen('App');
        }}
        onChat={() => {
          setAcceptPopup(false);
          navigateToScreen('ChatScreen');
        }}
        title="Yay!"
        backgroundColor="rgba(255, 245, 245, 0.8)"
        color="rgb(231, 106, 105)"
      />
      <DeclineInvitePopup
        showModal={declinePopup}
        close={() => {
          setDeclinePopup(!declinePopup);
          navigateToScreen('App');
        }}
        title="Bad News :\"
        backgroundColor="rgba(255, 245, 245, 0.8)"
        color="rgb(231, 106, 105)"
      />
    </View>
  );
};

export default RecieveInvite;
