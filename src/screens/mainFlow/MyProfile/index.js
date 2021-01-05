import React, {useState} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
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
import {useSelector, useDispatch} from 'react-redux';

const MyProfile = ({navigation}) => {
  const [acceptPopup, setAcceptPopup] = useState(false);
  const [declinePopup, setDeclinePopup] = useState(false);

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.login);

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.stickyContainer}>
          <Header
            title={'User Profile'}
            showLeftIcon={true}
            onLeftIconPress={() => navigation.navigate('othersProfile')}
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
                    uri: user?.user_profile_image[0]?.image
                      ? user?.user_profile_image[0]?.image
                      : 'https://picsum.photos/seed/picsum3/300/300',
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
                    uri: user?.user_profile_image[1]?.image
                      ? user?.user_profile_image[1]?.image
                      : 'https://picsum.photos/seed/picsum3/300/300',
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
                    uri: user?.user_profile_image[2]?.image
                      ? user?.user_profile_image[2]?.image
                      : 'https://picsum.photos/seed/picsum3/300/300',
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
              {user?.name}
            </Text>
            <Text style={{fontSize: size.xtiny}}>{user?.ocuppation}</Text>
            <Text style={{fontSize: size.xtiny}}>{user?.job_field}</Text>
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
            <Text style={{fontSize: size.xtiny}}>{user?.bio}</Text>
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
            <View style={{flexDirection: 'row'}}>
              {user?.user_sports?.map(item => (
                <Text style={{fontSize: size.xtiny}}>{item.sports} </Text>
              ))}
            </View>
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
              <Text style={{fontSize: size.xtiny}}>
                {user?.expertise_level}
              </Text>
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
              <Text style={{fontSize: size.xtiny}}>
                {user?.preferred_expertise_level}
              </Text>
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
              Type of snaks (events) want to g on
            </Text>
            <Text style={{fontSize: size.xtiny}}>
              Concerts, happy hours and computer events
            </Text>
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
            {/* <View style={{ width: WP('45'), backgroundColor: 'red', marginVertical: WP('1') }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image style={{ marginRight: WP('2') }} source={appIcons.smile} />
                                <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Sucessful snaks</Text>
                            </View>
                            <Text style={{ fontSize: size.xtiny }}>48</Text>
                        </View> */}
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
              My time preferenceto meet
            </Text>
            <Text style={{fontSize: size.xtiny}}>Brunch (9AM - 12Pm)</Text>
          </View>
          <Button
            title={'Edit my profile and my preference'}
            backgroundColor={colors.primary}
            textColor={colors.black}
            container
            Style={{marginTop: WP('10')}}
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

export default MyProfile;
