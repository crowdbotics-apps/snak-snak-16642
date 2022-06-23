import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyStatusBar from '../../../Components/MyStatusBar';
import Header from '../../../Components/Header';
import {useTheme, Card} from 'react-native-paper';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ScreenWrapper from '../../../Components/ScreenWrapper';
import {useNavigation} from '@react-navigation/native';
import {VERIFICATION_PATH} from '../../../Navigation/Routes';
const Auth = ({route}) => {
  const navigation = useNavigation();
  const type = route?.params?.type;
  const {colors} = useTheme();
  const [phoneNo, setPhoneNo] = useState('+923015957220');

  console.log(VERIFICATION_PATH, 'VERIFICATION_PATH');
  return (
    <SafeAreaProvider>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <ScreenWrapper
          isMiniLogo={false}
          logoHeight={100}
          title="To continue please enter your Phone number">
          <View style={styles.textContainer}>
            <Text style={[styles.text, {color: 'rgba(0, 0, 0, 0.6)'}]}>
              You'll receive a 4 digital code for phone number verification.
            </Text>
          </View>
          <Card elevation={5} style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.inputContainer}>
                <View style={styles.flex}>
                  <Text style={[styles.inputLabel]}>Enter your phone</Text>
                </View>
                <View style={styles.flex}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter Phone #"
                    onChangeText={setPhoneNo}
                    value={phoneNo}
                    defaultValue={phoneNo}
                  />
                </View>
              </View>
              <View style={styles.flex}>
                <PrimaryButton
                  text="Continue"
                  height={70}
                  onPress={() =>
                    navigation.navigate(VERIFICATION_PATH, {type, phoneNo})
                  }
                />
              </View>
            </View>
          </Card>
        </ScreenWrapper>
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  );
};
export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    marginTop: 22,
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  cardContainer: {
    marginTop: 35,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,

    elevation: 18,
    marginHorizontal: 5,
  },
  flex: {
    flex: 1,
  },
  inputContainer: {
    flex: 1.3,
    justifyContent: 'space-around',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
  },
  inputLabel: {
    color: 'rgba(0, 0, 0, 0.65)',
    marginTop: 0,
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: -10,
    fontFamily: 'OpenSans-Bold',
  },
});
