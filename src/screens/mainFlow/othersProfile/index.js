import React, { useState } from 'react';
import { Text, View, ScrollView, CheckBox, Image } from 'react-native';
import { styles } from './styles';
import {
    Header,
    CustomTextInput,
    ProfileCard,
    EditTextInput,
    Button,
    AcceptInvitePopup,
    DeclineInvitePopup,
} from '../../../components';
import { appIcons, colors, HP, size, WP } from '../../../services';
// import styles from './styles';

const OthersProfile = ({ navigation }) => {
    const [acceptPopup, setAcceptPopup] = useState(false);
    const [declinePopup, setDeclinePopup] = useState(false);
    const [isSelected, setSelection] = useState(false);


    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.stickyContainer}>
                    <Header
                        title={'User Profile'}
                        showLeftIcon={true}
                        onLeftIconPress={() => navigation.navigate('RecieveInvite')}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ height: HP('30'), width: WP('45'), borderRadius: WP('2') }}>
                            <View style={{ height: HP('30'), width: WP('45'), borderRadius: WP('2'), overflow: 'hidden' }}>
                                <Image style={{ height: HP('30'), width: WP('45'), borderRadius: WP('2') }}
                                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/d2b1/90e8/57983e00609a4b46219c6fa272d99ba3?Expires=1609718400&Signature=HKrHPdu5qcGTnswJIaxQ5lplHUURYw6X3Rj8sTq2Q6WW4s~lpZ3SJekN0yqO5PNKAcV7MS6GqrqQ7N148H6tADR7tNAvDsZfxeLKJ-nKquy6lKPW6kJoWAYyYT5v0HHmSx~f9vH4-Rf~LLbA5Kr92L4NTn1Eu6DpIymLl6FnuFwdajOLDDaCKv3XXYZHR30B5Sc2bcNWUfPjKkK9W-p4TplJwd1hLqTaglvOyMC8L3YVl5NqodxV-8lV-E5qZIbgsQvgw3Qq6xWyLSkDy1obJH0NhMgv~5D47gmc-QU0bxNNlqRudGmHJKhJoWNrl96tnaVufRX2qCyhA2wqiQh9WQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                />
                            </View>
                        </View>
                        <View style={{ height: HP('30'), width: WP('43'), justifyContent: 'space-between', borderRadius: WP('2') }}>
                            <View style={{ height: HP('14'), width: WP('43'), borderRadius: WP('2') }}>
                                <Image style={{ height: HP('14'), width: WP('43'), borderRadius: WP('2') }}
                                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/3c38/bf38/bc8ac111b04cc2ba205dd3bbc58a86b1?Expires=1609718400&Signature=J4pRUrHkRra9q3SBD5SssV5bIlrnazTr2TfrmSaYCx1vR5o2iSTl0rePtJ-UvaAvfF65QxBtxHKfn4QE~hvgxefUkxpSWfpsk78gmhIzsuoYn9O3BAcROQ-ONhgM-kSYam1trzmS~QhoB5000v-i8kLmixTJvnMD5y2poML8BWoVgg6ts~Ogjal4EHb4Q-8rAzT8pmuCXsqxPM~1LbqWZJrmTDwv90ZdvkgfSsojwO9aIAIMM6oFZBjlGgflBFAv435MuVXO4SsoMgc5bStYHDjpvzLTPgttMYkkXWCwvVH1sI9G8nbSCGGuVF-G7zsE3OON83Mx8qEO0mtwlBLVeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                />
                            </View>
                            <View style={{ height: HP('14'), width: WP('43'), borderRadius: WP('2') }}>
                                <Image style={{ height: HP('14'), width: WP('43'), borderRadius: WP('2') }}
                                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/84a7/1c39/a5841c25c794a257bf9a6fe2a05f67ca?Expires=1609718400&Signature=IDD-aguTrWBASaTH1FQzbIijg~60BlxqtKpHIv0uAxkKDZnnyp5gg03zPrcx1YYA8UOMhGFv3gq2Hf95RgpTmflB98P1S0IlEC~0VtahkK77uuAIpNL7CIB5DNddgAiaPGn0iEY9RacpjShrv58ZnXobNXMzw7agwVt-8fbeFkWbmK3sCdtNJ16qu9d2r2dJqeDYp5cxxOVn3edXIUvpo3qu~S7YD8trRrVuHh6X99FARfFZNVp5sDYjmuLTckC3Mn2mzzANoJVqORotfk-kcX4t3TpV~IqunoP7IvPVnGMHYgpZiRUvlJDlAw9zqEzJ9p44iSULTsTxKtGK-yuB1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('3') }}>
                        <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Peter, 28</Text>
                        <Text style={{ fontSize: size.xtiny }}>Electrical Engineer</Text>
                        <Text style={{ fontSize: size.xtiny }}>Wind Turbine Electrical Engineer</Text>
                    </View>
                    <View style={{ width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('1') }}>
                        <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Bio</Text>
                        <Text style={{ fontSize: size.xtiny }}>I have over 15 years of experience working in data science. Currently, I work as Asana's Senior Data Manager, improving products and services for our customers by using advance analytics, standing up big-data anaylitical tools.</Text>
                    </View>
                    <View style={{ width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('1') }}>
                        <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Sports</Text>
                        <Text style={{ fontSize: size.xtiny }}>Soccer, Baseball, Boxing</Text>
                    </View>
                    <View style={{ width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('1'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: WP('45'), backgroundColor: 'transparent', marginVertical: WP('1') }}>
                            <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Expertise Level</Text>
                            <Text style={{ fontSize: size.xtiny }}>Beginner</Text>
                        </View>
                        <View style={{ width: WP('45'), backgroundColor: 'transparent', marginVertical: WP('1') }}>
                            <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Peferred level xpertise</Text>
                            <Text style={{ fontSize: size.xtiny }}>Beginner</Text>
                        </View>
                    </View>
                    <View style={{ width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('1') }}>
                        <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Available to</Text>
                        <Text style={{ fontSize: size.xtiny }}>Friendly snaks</Text>
                    </View>
                    {/* <View style={{ width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('1') }}>
                        <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Type of snaks (events) want to g on</Text>
                        <Text style={{ fontSize: size.xtiny }}>Concerts, happy hours and computer events</Text>
                    </View> */}
                    <View style={{ width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('1'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: WP('45'), backgroundColor: 'transparent', marginVertical: WP('1') }}>
                            <View style={{ height: WP('10'), backgroundColor: 'transparent', flexDirection: 'row' }}>
                                <View style={{ height: WP('7'), width: WP('7'), backgroundColor: 'transparent', marginRight: WP('2'), justifyContent: 'center' }}>
                                    <Image style={{ height: WP('6'), width: WP('6'), resizeMode: 'contain' }} source={appIcons.calander} />
                                </View>
                                <View style={{ height: WP('7'), backgroundColor: 'transparent' }}>
                                    <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Snaks</Text>
                                    <Text style={{ fontSize: size.xtiny }}>50</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: WP('45'), backgroundColor: 'transparent', marginVertical: WP('1') }}>
                            <View style={{ height: WP('10'), backgroundColor: 'transparent', flexDirection: 'row' }}>
                                <View style={{ height: WP('7'), width: WP('7'), backgroundColor: 'transparent', marginRight: WP('2'), justifyContent: 'center' }}>
                                    <Image style={{ height: WP('6'), width: WP('6'), resizeMode: 'contain' }} source={appIcons.smile} />
                                </View>
                                <View style={{ height: WP('7'), backgroundColor: 'transparent' }}>
                                    <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Sucessful snaks</Text>
                                    <Text style={{ fontSize: size.xtiny }}>48</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: WP('92'), backgroundColor: 'transparent', marginVertical: WP('1'), flexDirection: 'row' }}>
                        <View style={{ height: WP('7'), width: WP('7'), backgroundColor: 'transparent', marginRight: WP('2'), justifyContent: 'center' }}>
                            <Image style={{ height: WP('6'), width: WP('6'), resizeMode: 'contain' }} source={appIcons.invitation} />
                        </View>
                        <Text style={{ fontSize: size.small, fontWeight: 'bold', marginVertical: WP('1') }}>Invite to an event</Text>
                    </View>
                    <CustomTextInput containerStyle={{ width: WP('92'), height: HP('8'), marginTop: WP('5') }} label={'Place'} />
                    <View style={{ height: HP('10'), width: WP('92'), justifyContent: 'space-between', backgroundColor: 'transparent', marginTop: WP('5'), flexDirection: 'row' }}>
                        <CustomTextInput containerStyle={{ width: WP('44'), height: HP('8') }} label={'Date'} />
                        <CustomTextInput containerStyle={{ width: WP('44'), height: HP('8') }} label={'Time'} />
                    </View>
                    <CustomTextInput containerStyle={{ width: WP('92'), height: HP('8') }} label={'Message'} />
                        <View style={{height: HP('5'), width:WP('92'), backgroundColor:'transparent', marginTop:WP('5'), alignItems:'center', flexDirection:'row'}}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={{height:WP('8'), width:WP('8'), borderColor:'black', alignSelf:'center', borderRadius:WP('2'), borderWidth:WP('0.1')}}
                            />
                            <Text style={{fontSize:size.small, marginLeft:WP('5')}}>I'll pickup the tab</Text>
                        </View>
                    <Button
                        title={'Send Invite'}
                        backgroundColor={colors.primary}
                        textColor={colors.black}
                        containerStyle={{ marginTop: WP('10') }}
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
