import React, {useState} from 'react';
import {Text, View, Modal, ScrollView, Image} from 'react-native';
import {styles} from './styles';
import {
  Header,
  Button,
  CustomModal,
} from '../../../components';
import {appIcons, appImages, colors, HP, size, WP} from '../../../services';
import {useSelector, useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyProfile = ({navigation}) => {
  const [acceptPopup, setAcceptPopup] = useState(false);
  const [declinePopup, setDeclinePopup] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
            <Text style={{fontSize: size.xtiny, marginBottom:WP('10')}}>Brunch (9AM - 12Pm)</Text>
          </View>
          <Button
            title={'Edit my profile and my preference'}
            backgroundColor={colors.primary}
            textColor={colors.black}
            container
            Style={{marginTop: WP('10')}}
            // onPress={() => setDeclinePopup()}
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <CustomModal modalVisible={modalVisible} toggleModal={() => setModalVisible(false)}>
            <View style={{height:HP('50'), width:WP('80'), backgroundColor:colors.white, borderRadius:WP('2'), overflow:'hidden'}}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{height:HP('2'), width:WP('4'), backgroundColor:'transparent', alignSelf:'flex-end', alignItems:'center', justifyContent:'center', marginTop:WP('2'), marginRight:WP('2')}}>
                <Image style={{height:HP('2'), width:WP('3'), resizeMode:'contain'}}
                source={appIcons.cancell}
                />
              </TouchableOpacity>
              <View style={{width:WP('70'), backgroundColor:'transparent', marginTop: HP('1'), alignSelf:'center'}}>
                <Text style={{fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1')}}>Feedback</Text>
                <Text style={{fontSize: size.tiny, color:colors.gray_3}}>Hey,was your Snaksnak with <Text style={{fontSize: size.small, fontWeight:'bold', color:colors.gray_3}}>Peter</Text></Text>
                <Text style={{fontSize: size.tiny, color:colors.gray_3}}>Yesterday (09/07/2020) a sucessfull ?</Text>
              </View>
              <View style={{height:HP('25'), width:WP('40'), backgroundColor:'transparent', alignSelf:'center', marginTop:WP('4')}}>
                <Image style={{height:HP('25'), width:WP('40'), resizeMode:'center'}}
                source={appImages.feedbackImage}
                />
              </View>
              <View style={{height:HP('8'), width:WP('80'), backgroundColor:'transparent', marginTop:WP('4'), flexDirection:'row', borderWidth:WP('0.1'), borderColor:colors.gray_3}}>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={{height:HP('8'), width:WP('40'), backgroundColor:'transparent', justifyContent:'center', alignItems:'center', borderRightWidth:WP('0.1'), borderColor:colors.gray_3}}>
                  <Text style={{fontSize: size.small, fontWeight: 'bold'}}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={{height:HP('8'), width:WP('40'), backgroundColor:colors.primary,borderLeftWidth:WP('0.1'),justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize: size.small, fontWeight: 'bold', color:colors.white}}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </CustomModal>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyProfile;
