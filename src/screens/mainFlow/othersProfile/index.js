import React, { useState } from 'react';
import { Text, View, ScrollView, CheckBox, Image, } from 'react-native';
import { styles } from './styles';
import {
    Header,
    CustomTextInput,
    Button,
} from '../../../components';
import { appIcons, colors, WP } from '../../../services';
import {useSelector, useDispatch} from 'react-redux';
import {sendInvitationRequest} from '../../../redux/actions';

const OthersProfile = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const {user, token} = useSelector(state => state.login);
    const {item} = route.params;

    console.log('[USER_OTHERS_PROFILE]', user, token, item);
    const [loader, setLoader] = useState(false);
    const [isSelected, setSelection] = useState(false);

    const sendInvitationHandler = () => {
        setLoader(true);
        const cbSuccess = (data) => {
            setLoader(false);
            console.log('[cbSuccess-send-invitation]', data);
        }
        const cbFailure = (error) => {
            setLoader(false);
            console.log('[cbSuccess-send-invitation]', error);
        }
        let params = {
            invited_user_id: item?.id,
            place: "Lahore",
            date: "2021-02-15",
            time: "23:50",
            message: "Some text"
        };
        dispatch(sendInvitationRequest(params, token, cbSuccess, cbFailure));
    }

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.stickyContainer}>
                    <Header
                        title={'User Profile'}
                        // showLeftIcon={true}
                        onLeftIconPress={() => navigation.navigate('RecieveInvite')}
                    />
                    <View style={styles.profileImgMainContainer}>
                        <View style={styles.firstImageContainer}>
                            <View style={styles.imageCont}>
                                <Image style={styles.imgStyle}
                                    source={{ uri: item?.user_profile_image?.length > 0 ? item.user_profile_image[0]?.image : 'https://s3-alpha-sig.figma.com/img/d2b1/90e8/57983e00609a4b46219c6fa272d99ba3?Expires=1609718400&Signature=HKrHPdu5qcGTnswJIaxQ5lplHUURYw6X3Rj8sTq2Q6WW4s~lpZ3SJekN0yqO5PNKAcV7MS6GqrqQ7N148H6tADR7tNAvDsZfxeLKJ-nKquy6lKPW6kJoWAYyYT5v0HHmSx~f9vH4-Rf~LLbA5Kr92L4NTn1Eu6DpIymLl6FnuFwdajOLDDaCKv3XXYZHR30B5Sc2bcNWUfPjKkK9W-p4TplJwd1hLqTaglvOyMC8L3YVl5NqodxV-8lV-E5qZIbgsQvgw3Qq6xWyLSkDy1obJH0NhMgv~5D47gmc-QU0bxNNlqRudGmHJKhJoWNrl96tnaVufRX2qCyhA2wqiQh9WQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                />
                            </View>
                        </View>
                        <View style={styles.smallImgsMainCont}>
                            <View style={styles.smallImgCont}>
                                <Image style={styles.smallImgStyle}
                                    source={{ uri: item?.user_profile_image?.length > 0 ? item.user_profile_image[1]?.image : 'https://s3-alpha-sig.figma.com/img/3c38/bf38/bc8ac111b04cc2ba205dd3bbc58a86b1?Expires=1609718400&Signature=J4pRUrHkRra9q3SBD5SssV5bIlrnazTr2TfrmSaYCx1vR5o2iSTl0rePtJ-UvaAvfF65QxBtxHKfn4QE~hvgxefUkxpSWfpsk78gmhIzsuoYn9O3BAcROQ-ONhgM-kSYam1trzmS~QhoB5000v-i8kLmixTJvnMD5y2poML8BWoVgg6ts~Ogjal4EHb4Q-8rAzT8pmuCXsqxPM~1LbqWZJrmTDwv90ZdvkgfSsojwO9aIAIMM6oFZBjlGgflBFAv435MuVXO4SsoMgc5bStYHDjpvzLTPgttMYkkXWCwvVH1sI9G8nbSCGGuVF-G7zsE3OON83Mx8qEO0mtwlBLVeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                />
                            </View>
                            <View style={styles.smallImgCont}>
                                <Image style={styles.smallImgStyle}
                                    source={{ uri: item?.user_profile_image?.length > 0 ? item.user_profile_image[2]?.image : 'https://s3-alpha-sig.figma.com/img/84a7/1c39/a5841c25c794a257bf9a6fe2a05f67ca?Expires=1609718400&Signature=IDD-aguTrWBASaTH1FQzbIijg~60BlxqtKpHIv0uAxkKDZnnyp5gg03zPrcx1YYA8UOMhGFv3gq2Hf95RgpTmflB98P1S0IlEC~0VtahkK77uuAIpNL7CIB5DNddgAiaPGn0iEY9RacpjShrv58ZnXobNXMzw7agwVt-8fbeFkWbmK3sCdtNJ16qu9d2r2dJqeDYp5cxxOVn3edXIUvpo3qu~S7YD8trRrVuHh6X99FARfFZNVp5sDYjmuLTckC3Mn2mzzANoJVqORotfk-kcX4t3TpV~IqunoP7IvPVnGMHYgpZiRUvlJDlAw9zqEzJ9p44iSULTsTxKtGK-yuB1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.boldHeaders}>{item?.name}</Text>
                        <Text style={styles.nameDetailTextStyle}>{item?.ocuppation}</Text>
                        {/* <Text style={styles.descriptionTextStyle}>{item?.bio}</Text> */}
                    </View>
                    <View style={styles.bioDetailContainer}>
                        <Text style={styles.boldHeaders}>Bio</Text>
                        <Text style={styles.descriptionTextStyle}>{item?.bio}</Text>
                    </View>
                    <View style={styles.sportsDetailContainer}>
                        <Text style={styles.boldHeaders}>Sports</Text>
                        <Text style={styles.descriptionTextStyle}>{item?.user_sports?.length > 0 ? item?.user_sports?.map(s => {return s?.sports + ', '}) : null }</Text>
                    </View>
                    <View style={styles.expertiesLevelMainContainer}>
                        <View style={styles.expertiesDetailsContainer}>
                            <Text style={styles.boldHeaders}>Expertise Level</Text>
                            <Text style={styles.descriptionTextStyle}>{item?.expertise_level}</Text>
                        </View>
                        <View style={styles.preferedexpertiesTextContainer}>
                            <Text style={styles.boldHeaders}>Peferred level expertise</Text>
                            <Text style={styles.descriptionTextStyle}>{item?.preferred_expertise_level}</Text>
                        </View>
                    </View>
                    <View style={styles.avalibleTextContainer}>
                        <Text style={styles.boldHeaders}>Available to</Text>
                        <Text style={styles.descriptionTextStyle}>{item?.ocuppation}</Text>
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
                    <View style={styles.inviteTextMainCont}>
                        <View style={styles.invitationImgContainer}>
                            <Image style={styles.invitationImgStyle} source={appIcons.invitation} />
                        </View>
                        <Text style={styles.boldHeaders}>Invite to an event</Text>
                    </View>
                    <CustomTextInput containerStyle={styles.fullCoustomInputFeildStyle} label={'Place'} />
                    <View style={styles.smallInputFeildsMainContainer}>
                        <CustomTextInput containerStyle={styles.smallInputFeildsStyle} label={'Date'} />
                        <CustomTextInput containerStyle={styles.smallInputFeildsStyle} label={'Time'} />
                    </View>
                    <CustomTextInput containerStyle={styles.fullCoustomInputFeildStyle} label={'Message'} />
                        <View style={styles.checkBoxMainContainer}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkBoxStyle}
                            />
                            <Text style={styles.checkBoxLableTextStyle}>I'll pickup the tab</Text>
                        </View>
                    <Button
                        title={'Send Invite'}
                        backgroundColor={colors.primary}
                        textColor={colors.black}
                        containerStyle={{ marginTop: WP('10') }}
                        onPress={() => sendInvitationHandler()}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default OthersProfile;
