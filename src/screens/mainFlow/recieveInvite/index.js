import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
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

const RecieveInvite = ({navigation}) => {
  const [acceptPopup, setAcceptPopup] = useState(false);
  const [declinePopup, setDeclinePopup] = useState(false);

  return (
    <View style={styles.flex}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.stickyContainer}>
          <Header
            title={'You are invited!'}
            showLeftIcon={true}
            onLeftIconPress={() => navigation.toggleDrawer()}
          />
          <Text style={styles.filterTitle}>
            {'Nicole'}
            <Text style={styles.simpleText}> invited you to an event</Text>
          </Text>
          <View style={styles.spacer} />
          <ProfileCard
            image={'https://picsum.photos/seed/picsum3/300/300'}
            name={'Amy'}
            age={'27'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
            backgroundColor={colors.gray_4}
          />
          <View style={[styles.spacer, {marginTop: HP('1')}]} />
          <EditTextInput
            containerStyle={styles.customTextInput}
            dropDown={true}
            dropDownListHeader={'Place'}
            label={'Place'}
            editable
            value={'Rose maxiano'}
            editBackColor={colors.gray_4}
          />
          <View style={styles.inputRow}>
            <View style={styles.inputRow1}>
              <EditTextInput
                containerStyle={styles.customTextInput}
                dropDown={true}
                dropDownListHeader={'Place'}
                label={'Date'}
                editable
                value={'10/03/20'}
                editBackColor={colors.gray_4}
                row
              />
            </View>
            <View style={styles.inputRow2}>
              <EditTextInput
                containerStyle={styles.customTextInput}
                dropDown={true}
                dropDownListHeader={'Place'}
                label={'Time'}
                editable
                value={'9:30 PM'}
                editBackColor={colors.gray_4}
                row
              />
            </View>
          </View>

          <View style={styles.spacer} />
          <CustomTextInput
            label={'Message'}
            value={'Rosa has amazing happy hour :)'}
            editBackColor={colors.gray_4}
            editable
          />
          <View style={styles.spacer} />
          <Text style={styles.simpleText}>
            {'Nicole will'}
            <Text style={[styles.filterTitle, {color: colors.green}]}>
              {' '}
              pickup{' '}
            </Text>
            the tab
          </Text>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <CustomTextInput label={'Your Response'} value={''} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.buttonRow}>
            <View style={styles.buttonRow1}>
              <Button
                title={'Accept'}
                onPress={() => setAcceptPopup(!acceptPopup)}
              />
            </View>
            <View style={styles.buttonRow2}>
              <Button
                title={'Decline'}
                backgroundColor={colors.white}
                textColor={colors.black_1}
                containerStyle={styles.buttonStyle}
                onPress={() => setDeclinePopup(!declinePopup)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <AcceptInvitePopup
        showModal={acceptPopup}
        close={() => {
          setAcceptPopup(!acceptPopup);
        }}
        title="Yay!"
        backgroundColor="rgba(255, 245, 245, 0.8)"
        color="rgb(231, 106, 105)"
      />
      <DeclineInvitePopup
        showModal={declinePopup}
        close={() => {
          setDeclinePopup(!declinePopup);
        }}
        title="Bad News :\"
        backgroundColor="rgba(255, 245, 245, 0.8)"
        color="rgb(231, 106, 105)"
      />
    </View>
  );
};

export default RecieveInvite;
