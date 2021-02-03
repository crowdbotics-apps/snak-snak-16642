/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import {styles} from './styles';
import {Button, Header, BlockedAccountsCard} from '../../../components';
import { colors, HP, WP, appImages, size } from '../../../services';
import { SearchBar } from 'react-native-elements';


const BlockedAccounts = ({navigation}) => {
  return (
    <View style={styles.flex}>
      <ScrollView >
        <View style={styles.stickyContainer}>
          <Header
            title={'Blocked Accounts'}
            showLeftIcon={true}
            onLeftIconPress={() => navigation.navigate('BlockedAccounts')}
          />
        </View>
        <BlockedAccountsCard
            image={appImages.headerImg}
            profileID={'david0908'}
            name={'David Maclaren'}
        />
        <BlockedAccountsCard
            image={appImages.headerImg}
            profileID={'david0908'}
            name={'David Maclaren'}
        />
        <BlockedAccountsCard
            image={appImages.headerImg}
            profileID={'david0908'}
            name={'David Maclaren'}
        />
        <BlockedAccountsCard
            image={appImages.headerImg}
            profileID={'david0908'}
            name={'David Maclaren'}
        />
        <BlockedAccountsCard
            image={appImages.headerImg}
            profileID={'david0908'}
            name={'David Maclaren'}
        />
        <BlockedAccountsCard
            image={appImages.headerImg}
            profileID={'david0908'}
            name={'David Maclaren'}
        />
        <BlockedAccountsCard
            image={appImages.headerImg}
            profileID={'david0908'}
            name={'David Maclaren'}
        />
        <BlockedAccountsCard
            image={appImages.headerImg}
            profileID={'david0908'}
            name={'David Maclaren'}
        />
      </ScrollView>
    </View>
  );
};

export default BlockedAccounts;
