/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { styles } from './styles';
import { Button, Header, BlockedAccountsCard } from '../../../components';
import { colors, HP, WP, appImages, size } from '../../../services';
import { SearchBar } from 'react-native-elements';


const SubscriptionPlan = ({ navigation }) => {
    return (
        <View style={styles.flex}>
            <ScrollView >
                <View style={styles.stickyContainer}>
                    <Header
                        title={'Subscription Plans'}
                        showLeftIcon={true}
                        onLeftIconPress={() => navigation.navigate('SubscriptionPlan')}
                    />
                </View>
                <View style={styles.FirstViewMainContainer}>
                    <Text style={styles.boldTitleTextStyle}>Snak Snak Prime</Text>
                    <View style={styles.descriptionTextContainer}>
                        <Text style={styles.descriptionTextStyle}>Receive Adenture suggestions weekly including concerts, sporting events and great resturants in your area </Text>
                        <Text style={styles.descriptionTextStyle}>Creat Group Snaks up to 10 Guests</Text>
                        <Text style={styles.descriptionTextStyle}>Receive  discounts at chosen venues</Text>
                    </View>
                    <View style={styles.twoBtnViewContStyle}>
                        <View style={styles.smallBtnStyle}>
                            <Text style={styles.subscriptionTextStyle}>$5.99/Month</Text>
                            <Button
                                title={'choose Monthly'}
                                containerStyle={styles.ButtonContainer}
                                titleStyle={{ fontSize: size.small }}
                            />
                        </View>
                        <View style={styles.smallBtnStyle}>
                            <Text style={styles.subscriptionTextStyle}>$50/Year</Text>
                            <Button
                                title={'choose Yearly'}
                                containerStyle={styles.ButtonContainer}
                                titleStyle={{ fontSize: size.small }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.SecoundViewMainContainer}>
                    <Text style={styles.boldTitleTextStyle}>Snak Snak Elite</Text>
                    <View style={styles.descriptionTextContainer}>
                        <Text style={styles.descriptionTextStyle}>Be connected with the elite members like you in your area. </Text>
                        <Text style={styles.descriptionTextStyle}>Receive invitations to Snak Snak Elite Events</Text>
                        <Text style={styles.descriptionTextStyle}>Must pass an application process to join</Text>
                    </View>
                    <View style={styles.twoBtnViewContStyle}>
                        <View style={styles.smallBtnStyle}>
                            <Text style={styles.subscriptionTextStyle}>$10.99/Month</Text>
                            <Button
                                title={'choose Monthly'}
                                containerStyle={styles.ButtonContainer}
                                titleStyle={{ fontSize: size.small }}
                            />
                        </View>
                        <View style={styles.smallBtnStyle}>
                            <Text style={styles.subscriptionTextStyle}>$100/Year</Text>
                            <Button
                                title={'choose Yearly'}
                                containerStyle={styles.ButtonContainer}
                                titleStyle={{ fontSize: size.small }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.ThirdViewMainContainer}>
                    <Text style={styles.boldTitleTextStyle}>Snak Snak Artist</Text>
                    <View style={styles.descriptionTextContainer}>
                        <Text style={styles.descriptionTextStyle}>Invite Available users to your shows or galleries</Text>
                    </View>
                    <View style={styles.thirdViewContStyle}>
                            <Button
                                title={'click Here For Details & Pricing'}
                                containerStyle={styles.thirdViewBtnStyle}
                                titleStyle={{ fontSize: size.small }}
                            />
                    </View>
                </View>
                <View style={{marginBottom:WP('5')}}></View>

            </ScrollView>
        </View>
    );
};

export default SubscriptionPlan;
