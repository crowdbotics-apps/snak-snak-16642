import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyStatusBar from '../../../Components/MyStatusBar';
import {useTheme, Card} from 'react-native-paper';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ScreenWrapper from '../../../Components/ScreenWrapper';
import {useNavigation} from '@react-navigation/native';
import CIRCLE_ADD_IMAGE from './../../../assets/Images/circle-add.png';
import CAMERA_IMAGE from './../../../assets/Images/bi_camera.png';
import SimpleInput from '../../../Components/Inputs/SimpleInput';
import DropDown from '../../../Components/Inputs/DropDown';
const CreateProfile = ({route}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [bio, setBio] = useState('');
  const [occupation, setOccupation] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [jobField, setJobField] = useState(null);
  return (
    <SafeAreaProvider>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <ScreenWrapper isMiniLogo={true} logoHeight={100} logo2>
          <View style={styles.cardContainer}>
            <View style={[styles.card, {backgroundColor: colors.primary}]}>
              <Image source={CAMERA_IMAGE} style={styles.cardCamera} />
              <Text style={[styles.cardText, {color: colors.white}]}>
                Add photo
              </Text>
            </View>
            <View style={[styles.card, {backgroundColor: colors.white}]}>
              <Image source={CIRCLE_ADD_IMAGE} style={styles.cardIcon} />
            </View>
            <View style={[styles.card, {backgroundColor: colors.white}]}>
              <Image source={CIRCLE_ADD_IMAGE} style={styles.cardIcon} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <SimpleInput
              value={name}
              onChangeText={setName}
              placeholder={'Name'}
              dense
              title="Name"
            />
          </View>
          <View style={styles.inputContainer}>
            <SimpleInput
              value={email}
              onChangeText={setEmail}
              placeholder={'Email'}
              dense
              title="Email"
            />
          </View>
          <View style={styles.row}>
            <View style={[styles.flex1, {marginRight: 4, zIndex: 10000}]}>
              <DropDown
                value={age}
                onChangeText={setAge}
                items={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => {
                  return {label: v, value: v};
                })}
                placeholder={'Age'}
                dense
                title="Age"
              />
            </View>
            <View style={[styles.flex1, {marginLeft: 4, zIndex: 10000}]}>
              <DropDown
                value={gender}
                onChangeText={setGender}
                items={['Male', 'Female'].map(v => {
                  return {label: v, value: v};
                })}
                placeholder={'Gender'}
                dense
                title="Gender"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <SimpleInput
              value={phoneNo}
              onChangeText={setPhoneNo}
              placeholder={'Phone number'}
              dense
              title="Phone number"
            />
          </View>
          <View style={styles.inputContainer}>
            <SimpleInput
              value={bio}
              onChangeText={setBio}
              placeholder={'Text'}
              dense
              title="Bio"
              multiline
            />
          </View>
          <View style={styles.inputContainer}>
            <SimpleInput
              value={occupation}
              onChangeText={setOccupation}
              placeholder={'Occupation'}
              dense
              title="Occupation"
            />
          </View>
          <View style={styles.inputContainer}>
            <DropDown
              value={jobField}
              onChangeText={setJobField}
              items={[
                'Front-end Developer',
                'Backend Developer',
                'Developer',
                'Project Manager',
              ].map(v => {
                return {label: v, value: v};
              })}
              placeholder={'Job field'}
              dense
              title="Job field"
            />
          </View>

          <View style={[styles.inputContainer, {marginBottom: 25}]}>
            <PrimaryButton text="Save alterations" height={70} />
          </View>
        </ScreenWrapper>
        <ImageBackground
          style={[styles.avatar, {}]}
          imageStyle={{borderRadius: 60, backgroundColor: colors.white}}
          source={null}>
          <TouchableOpacity>
            <Image source={CIRCLE_ADD_IMAGE} style={styles.icon} />
          </TouchableOpacity>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  );
};
export default CreateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,

    elevation: 18,
  },
  cardContainer: {
    marginTop: 45,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 23,
  },
  flex: {
    flex: 1,
  },

  avatar: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    position: 'absolute',
    top: 35,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,

    elevation: 18,
    marginHorizontal: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 5,
    marginBottom: 3,
  },
  cardIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  cardCamera: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 12,
    marginTop: 2,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 7,
  },
  row: {
    marginHorizontal: 20,
    marginVertical: 7,
    flexDirection: 'row',
    zIndex: 10000,
  },
  flex1: {
    flex: 1,
  },
});
