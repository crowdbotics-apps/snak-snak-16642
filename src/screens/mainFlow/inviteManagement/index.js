/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {Header, InviteManagementCard} from '../../../components';
import { colors } from '../../../services';
import { SearchBar } from 'react-native-elements';


const InviteManagement = ({navigation}) => {
  return (
    <View style={styles.flex}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.stickyContainer}>
          <Header
            title={'Who is Available'}
            showLeftIcon={true}
            onLeftIconPress={() => navigation.toggleDrawer()}
          />
        </View>
        <View style={styles.list}>
        <SearchBar
        placeholder="search"
        containerStyle={styles.searchBarMainContainer}
        inputContainerStyle={styles.inputContainerStyle}
      />
          <InviteManagementCard
            image={'https://picsum.photos/seed/picsum1/300/300'}
            name={'Nicola'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
            Invitestatus={'Invite Accepted'}
            backgroundColor={'green'}
          />
          <InviteManagementCard
            image={'https://picsum.photos/seed/picsum2/300/300'}
            name={'Barbra'}
            age={'20'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
            Invitestatus={'Waiting respone'}
            backgroundColor={colors.gray_3}
          />
          <InviteManagementCard
            image={'https://picsum.photos/seed/picsum3/300/300'}
            name={'Amy'}
            age={'27'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
            Invitestatus={'Invite Declined'}
            backgroundColor={colors.primary}
          />
          <InviteManagementCard
            image={'https://picsum.photos/seed/picsum4/300/300'}
            name={'Lua'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
            Invitestatus={'Your Invite'}
            backgroundColor={colors.blue}
          />
          <InviteManagementCard
            image={'https://picsum.photos/seed/picsum5/300/300'}
            name={'Beth'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
            Invitestatus={'Invite Accepted'}
            backgroundColor={'green'}
          />
          <InviteManagementCard
            image={'https://picsum.photos/seed/picsum6/300/300'}
            name={'Nicola'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
            Invitestatus={'Waiting respone'}
            backgroundColor={colors.gray_3}
          />
          <InviteManagementCard
            image={'https://picsum.photos/seed/picsum7/300/300'}
            name={'Nicola'}
            age={'24'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
            Invitestatus={'Invite Declined'}
            backgroundColor={colors.primary}
          />
          <InviteManagementCard
            image={'https://picsum.photos/seed/picsum8/300/300'}
            name={'Barbra'}
            age={'20'}
            profession={'Medical Field, Nurse'}
            status={'Professional Snak'}
            distance={'10 miles away'}
            Invitestatus={'Your Invite'}
            backgroundColor={colors.blue}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default InviteManagement;
