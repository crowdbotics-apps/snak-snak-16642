import React, {useState} from 'react';
import {Text, View, ScrollView, CheckBox, Image} from 'react-native';
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
import {appIcons, colors, HP, size, WP} from '../../../services';
// import styles from './styles';

const OthersProfile = ({navigation}) => {
  const [acceptPopup, setAcceptPopup] = useState(false);
  const [declinePopup, setDeclinePopup] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.stickyContainer}>
          <Header
            title={'Others Profile'}
            showLeftIcon={true}
            onLeftIconPress={() => navigation.navigate('RecieveInvite')}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                height: HP('30'),
                width: WP('45'),
                borderRadius: WP('2'),
              }}>
              <View
                style={{
                  height: HP('30'),
                  width: WP('45'),
                  borderRadius: WP('2'),
                  overflow: 'hidden',
                }}>
                <Image
                  style={{
                    height: HP('30'),
                    width: WP('45'),
                    borderRadius: WP('2'),
                  }}
                  source={{
                    uri: 'https://picsum.photos/seed/picsum3/300/300',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                height: HP('30'),
                width: WP('43'),
                justifyContent: 'space-between',
                borderRadius: WP('2'),
              }}>
              <View
                style={{
                  height: HP('14'),
                  width: WP('43'),
                  borderRadius: WP('2'),
                }}>
                <Image
                  style={{
                    height: HP('14'),
                    width: WP('43'),
                    borderRadius: WP('2'),
                  }}
                  source={{
                    uri: 'https://picsum.photos/seed/picsum3/300/300',
                  }}
                />
              </View>
              <View
                style={{
                  height: HP('14'),
                  width: WP('43'),
                  borderRadius: WP('2'),
                }}>
                <Image
                  style={{
                    height: HP('14'),
                    width: WP('43'),
                    borderRadius: WP('2'),
                  }}
                  source={{
                    uri: 'https://picsum.photos/seed/picsum3/300/300',
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: WP('92'),
              backgroundColor: 'transparent',
              marginVertical: WP('3'),
            }}>
            <Text
              style={{
                fontSize: size.small,
                fontWeight: 'bold',
                marginVertical: WP('1'),
              }}>
              Peter, 28
            </Text>
            <Text style={{fontSize: size.xtiny}}>Electrical Engineer</Text>
            <Text style={{fontSize: size.xtiny}}>
              Wind Turbine Electrical Engineer
            </Text>
          </View>
          <View
            style={{
              width: WP('92'),
              backgroundColor: 'transparent',
              marginVertical: WP('1'),
            }}>
            <Text
              style={{
                fontSize: size.small,
                fontWeight: 'bold',
                marginVertical: WP('1'),
              }}>
              Bio
            </Text>
            <Text style={{fontSize: size.xtiny}}>
              I have over 15 years of experience working in data science.
              Currently, I work as Asana's Senior Data Manager, improving
              products and services for our customers by using advance
              analytics, standing up big-data anaylitical tools.
            </Text>
          </View>
          <View
            style={{
              width: WP('92'),
              backgroundColor: 'transparent',
              marginVertical: WP('1'),
            }}>
            <Text
              style={{
                fontSize: size.small,
                fontWeight: 'bold',
                marginVertical: WP('1'),
              }}>
              Sports
            </Text>
            <Text style={{fontSize: size.xtiny}}>Soccer, Baseball, Boxing</Text>
          </View>
          <View
            style={{
              width: WP('92'),
              backgroundColor: 'transparent',
              marginVertical: WP('1'),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: WP('45'),
                backgroundColor: 'transparent',
                marginVertical: WP('1'),
              }}>
              <Text
                style={{
                  fontSize: size.small,
                  fontWeight: 'bold',
                  marginVertical: WP('1'),
                }}>
                Expertise Level
              </Text>
              <Text style={{fontSize: size.xtiny}}>Beginner</Text>
            </View>
            <View
              style={{
                width: WP('45'),
                backgroundColor: 'transparent',
                marginVertical: WP('1'),
              }}>
              <Text
                style={{
                  fontSize: size.small,
                  fontWeight: 'bold',
                  marginVertical: WP('1'),
                }}>
                Peferred level xpertise
              </Text>
              <Text style={{fontSize: size.xtiny}}>Beginner</Text>
            </View>
          </View>
          <View
            style={{
              width: WP('92'),
              backgroundColor: 'transparent',
              marginVertical: WP('1'),
            }}>
            <Text
              style={{
                fontSize: size.small,
                fontWeight: 'bold',
                marginVertical: WP('1'),
              }}>
              Available to
            </Text>
            <Text style={{fontSize: size.xtiny}}>Friendly snaks</Text>
          </View>
          {/* <View style={{ width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('1') }}>
                        <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Type of snaks (events) want to g on</Text>
                        <Text style={{ fontSize: size.xtiny }}>Concerts, happy hours and computer events</Text>
                    </View> */}
          <View
            style={{
              width: WP('92'),
              backgroundColor: 'transparent',
              marginVertical: WP('1'),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: WP('45'),
                backgroundColor: 'transparent',
                marginVertical: WP('1'),
              }}>
              <View
                style={{
                  height: WP('10'),
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: WP('7'),
                    width: WP('7'),
                    backgroundColor: 'transparent',
                    marginRight: WP('2'),
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: WP('6'),
                      width: WP('6'),
                      resizeMode: 'contain',
                    }}
                    source={appIcons.calander}
                  />
                </View>
                <View style={{height: WP('7'), backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: size.small,
                      fontWeight: 'bold',
                      marginVertical: WP('1'),
                    }}>
                    Snaks
                  </Text>
                  <Text style={{fontSize: size.xtiny}}>50</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: WP('45'),
                backgroundColor: 'transparent',
                marginVertical: WP('1'),
              }}>
              <View
                style={{
                  height: WP('10'),
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: WP('7'),
                    width: WP('7'),
                    backgroundColor: 'transparent',
                    marginRight: WP('2'),
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      height: WP('6'),
                      width: WP('6'),
                      resizeMode: 'contain',
                    }}
                    source={appIcons.smile}
                  />
                </View>
                <View style={{height: WP('7'), backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: size.small,
                      fontWeight: 'bold',
                      marginVertical: WP('1'),
                    }}>
                    Sucessful snaks
                  </Text>
                  <Text style={{fontSize: size.xtiny}}>48</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: WP('92'),
              backgroundColor: 'transparent',
              marginVertical: WP('1'),
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: WP('7'),
                width: WP('7'),
                backgroundColor: 'transparent',
                marginRight: WP('2'),
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: WP('6'),
                  width: WP('6'),
                  resizeMode: 'contain',
                }}
                source={appIcons.invitation}
              />
            </View>
            <Text
              style={{
                fontSize: size.small,
                fontWeight: 'bold',
                marginVertical: WP('1'),
              }}>
              Invite to an event
            </Text>
          </View>
          <CustomTextInput
            containerStyle={{
              width: WP('92'),
              height: HP('8'),
              marginTop: WP('5'),
            }}
            label={'Place'}
          />
          <View
            style={{
              height: HP('10'),
              width: WP('92'),
              justifyContent: 'space-between',
              backgroundColor: 'transparent',
              marginTop: WP('5'),
              flexDirection: 'row',
            }}>
            <CustomTextInput
              containerStyle={{width: WP('44'), height: HP('8')}}
              label={'Date'}
            />
            <CustomTextInput
              containerStyle={{width: WP('44'), height: HP('8')}}
              label={'Time'}
            />
          </View>
          <CustomTextInput
            containerStyle={{width: WP('92'), height: HP('8')}}
            label={'Message'}
          />
          <View
            style={{
              height: HP('5'),
              width: WP('92'),
              backgroundColor: 'transparent',
              marginTop: WP('5'),
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={{
                height: WP('8'),
                width: WP('8'),
                borderColor: 'black',
                alignSelf: 'center',
                borderRadius: WP('2'),
                borderWidth: WP('0.1'),
              }}
            />
            <Text style={{fontSize: size.small, marginLeft: WP('5')}}>
              I'll pickup the tab
            </Text>
          </View>
          <Button
            title={'Send Invite'}
            backgroundColor={colors.primary}
            textColor={colors.black}
            containerStyle={{marginTop: WP('10')}}
            onPress={() => setDeclinePopup()}
          />
        </View>
      </ScrollView>
      {/* <AcceptInvitePopup
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
            /> */}
    </View>
  );
};

export default OthersProfile;
