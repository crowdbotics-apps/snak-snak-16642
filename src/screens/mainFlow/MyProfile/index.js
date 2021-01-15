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
                              <View style={styles.profileImgMainContainer}>
                        <View style={styles.firstImageContainer}>
                            <View style={styles.imageCont}>
                                <Image style={styles.imgStyle}
                                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/d2b1/90e8/57983e00609a4b46219c6fa272d99ba3?Expires=1609718400&Signature=HKrHPdu5qcGTnswJIaxQ5lplHUURYw6X3Rj8sTq2Q6WW4s~lpZ3SJekN0yqO5PNKAcV7MS6GqrqQ7N148H6tADR7tNAvDsZfxeLKJ-nKquy6lKPW6kJoWAYyYT5v0HHmSx~f9vH4-Rf~LLbA5Kr92L4NTn1Eu6DpIymLl6FnuFwdajOLDDaCKv3XXYZHR30B5Sc2bcNWUfPjKkK9W-p4TplJwd1hLqTaglvOyMC8L3YVl5NqodxV-8lV-E5qZIbgsQvgw3Qq6xWyLSkDy1obJH0NhMgv~5D47gmc-QU0bxNNlqRudGmHJKhJoWNrl96tnaVufRX2qCyhA2wqiQh9WQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                />
                            </View>
                        </View>
                        <View style={styles.smallImgsMainCont}>
                            <View style={styles.smallImgCont}>
                                <Image style={styles.smallImgStyle}
                                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/3c38/bf38/bc8ac111b04cc2ba205dd3bbc58a86b1?Expires=1609718400&Signature=J4pRUrHkRra9q3SBD5SssV5bIlrnazTr2TfrmSaYCx1vR5o2iSTl0rePtJ-UvaAvfF65QxBtxHKfn4QE~hvgxefUkxpSWfpsk78gmhIzsuoYn9O3BAcROQ-ONhgM-kSYam1trzmS~QhoB5000v-i8kLmixTJvnMD5y2poML8BWoVgg6ts~Ogjal4EHb4Q-8rAzT8pmuCXsqxPM~1LbqWZJrmTDwv90ZdvkgfSsojwO9aIAIMM6oFZBjlGgflBFAv435MuVXO4SsoMgc5bStYHDjpvzLTPgttMYkkXWCwvVH1sI9G8nbSCGGuVF-G7zsE3OON83Mx8qEO0mtwlBLVeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                />
                            </View>
                            <View style={styles.smallImgCont}>
                                <Image style={styles.smallImgStyle}
                                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/84a7/1c39/a5841c25c794a257bf9a6fe2a05f67ca?Expires=1609718400&Signature=IDD-aguTrWBASaTH1FQzbIijg~60BlxqtKpHIv0uAxkKDZnnyp5gg03zPrcx1YYA8UOMhGFv3gq2Hf95RgpTmflB98P1S0IlEC~0VtahkK77uuAIpNL7CIB5DNddgAiaPGn0iEY9RacpjShrv58ZnXobNXMzw7agwVt-8fbeFkWbmK3sCdtNJ16qu9d2r2dJqeDYp5cxxOVn3edXIUvpo3qu~S7YD8trRrVuHh6X99FARfFZNVp5sDYjmuLTckC3Mn2mzzANoJVqORotfk-kcX4t3TpV~IqunoP7IvPVnGMHYgpZiRUvlJDlAw9zqEzJ9p44iSULTsTxKtGK-yuB1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.boldHeaders}>Peter, 28</Text>
                        <Text style={styles.nameDetailTextStyle}>Electrical Engineer</Text>
                        <Text style={styles.descriptionTextStyle}>Wind Turbine Electrical Engineer</Text>
                    </View>
                    <View style={styles.bioDetailContainer}>
                        <Text style={styles.boldHeaders}>Bio</Text>
                        <Text style={styles.descriptionTextStyle}>I have over 15 years of experience working in data science. Currently, I work as Asana's Senior Data Manager, improving products and services for our customers by using advance analytics, standing up big-data anaylitical tools.</Text>
                    </View>
                    <View style={styles.sportsDetailContainer}>
                        <Text style={styles.boldHeaders}>Sports</Text>
                        <Text style={styles.descriptionTextStyle}>Soccer, Baseball, Boxing</Text>
                    </View>
                    <View style={styles.expertiesLevelMainContainer}>
                        <View style={styles.expertiesDetailsContainer}>
                            <Text style={styles.boldHeaders}>Expertise Level</Text>
                            <Text style={styles.descriptionTextStyle}>Beginner</Text>
                        </View>
                        <View style={styles.preferedexpertiesTextContainer}>
                            <Text style={styles.boldHeaders}>Peferred level expertise</Text>
                            <Text style={styles.descriptionTextStyle}>Beginner</Text>
                        </View>
                    </View>
                    <View style={styles.avalibleTextContainer}>
                        <Text style={styles.boldHeaders}>Available to</Text>
                        <Text style={styles.descriptionTextStyle}>Friendly snaks</Text>
                    </View>
                    <View style={styles.snaksAndSuccessfulMainCont}>
                        <View style={styles.subContainer}>
                            <View style={styles.snaksContainer}>
                                <View style={styles.calenderImgContainer}>
                                    <Image style={styles.calanderImgStyle} source={appIcons.calander} />
                                </View>
                                <View style={styles.snaksTextContainerStyle}>
                                    <Text style={styles.boldHeaders}>Snaks</Text>
                                    <Text style={styles.descriptionTextStyle}>50</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.subContainer}>
                            <View style={styles.successfulSnaksContainer}>
                                <View style={styles.smileImgContStyle}>
                                    <Image style={styles.smileImgStyle} source={appIcons.smile} />
                                </View>
                                <View style={styles.successfulTextCont}>
                                    <Text style={styles.boldHeaders}>Sucessful snaks</Text>
                                    <Text style={styles.descriptionTextStyle}>48</Text>
                                </View>
                            </View>
                        </View>
                    </View>
          <View style={styles.timePreferanceTextContainer}>
            <Text style={styles.boldHeaders}>My time preference to meet</Text>
            <Text style={styles.descriptionTextStyle}>Brunch (9AM - 12Pm)</Text>
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
            <View style={styles.modalMainContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancellBtnContainer}>
                <Image style={styles.cancellImgStyle}
                source={appIcons.cancell}
                />
              </TouchableOpacity>
              <View style={styles.feedBackTextMainContainer}>
                <Text style={styles.boldHeaders}>Feedback</Text>
                <Text style={styles.feedBackgreyText}>Hey,was your Snaksnak with <Text style={styles.feedbackgreyboldText}>Peter</Text></Text>
                <Text style={styles.feedBackgreyText}>Yesterday (09/07/2020) a sucessfull ?</Text>
              </View>
              <View style={styles.modalImgContainer}>
                <Image style={styles.modalImgStyle}
                source={appImages.feedbackImage}
                />
              </View>
              <View style={styles.modalBtnsMainContainer}>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.noBtnStyle}>
                  <Text style={styles.noBtnTextStyle}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.yesBtnStyle}>
                <Text style={styles.yesBtnTextStyle}>Yes</Text>
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
          {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          </View> */}