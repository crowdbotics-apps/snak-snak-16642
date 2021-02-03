/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {colors, family, HP, size, WP} from '../services';
import {ListItem, Icon, Avatar} from 'react-native-elements';

const DrawerComponent = ({navigation, state}) => {
  const {routes, index} = state;
  const focusedRoute = routes[index].name; // this is the active route
  const options = [
    {
      iconType: 'entypo',
      iconName: 'calendar',
      label: 'Search a Snaksnak',
      route: 'SearchSnack',
      tag: '',
      onPress: () => navigation.navigate('SearchSnack'),
    },
    {
      iconType: 'feather',
      iconName: 'user-plus',
      route: 'InvitesMangement',
      label: 'Inivites Management',
      tag: '',
      onPress: () => navigation.navigate('InvitesMangement'),
    },
    {
      iconType: 'feather',
      iconName: 'user',
      route: 'YourProfile',
      label: 'Your Profile',
      tag: '',
      onPress: () => navigation.navigate('YourProfile'),
    },
    {
      iconType: 'feather',
      iconName: 'settings',
      route: 'Settings',
      label: 'Setting',
      tag: '',
      onPress: () => navigation.navigate('Settings'),
    },
  ];

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Avatar
          source={{
            uri: 'https://picsum.photos/id/237/200/300',
          }}
          size={'large'}
          avatarStyle={{borderRadius: 50}}
          containerStyle={{
            borderRadius: 50,
            marginHorizontal: WP('5'),
            marginTop: HP('7'),
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: WP('7'),
            position: 'absolute',
            bottom: HP('1'),
            flex: 1,
            width: '90%',
            alignItems: 'center',
          }}>
          <Text style={styles.person}>Peter</Text>
          <Icon
            name={'arrow-drop-down'}
            containerStyle={{right: 10}}
            type={'material'}
            color={colors.white}
          />
        </View>
      </View>
      <View style={styles.spacer} />
      {options.map((item, key) => {
        return (
          <ListItem
            underlayColor={'transparent'}
            onPress={item.onPress}
            style={styles.itemContainer}
            key={key}>
            <Icon
              name={item.iconName}
              color={
                focusedRoute === item.route ? colors.primary : colors.black_1
              }
              type={item.iconType}
            />
            <ListItem.Content>
              <ListItem.Title
                style={
                  focusedRoute === item.route
                    ? styles.activeLabel
                    : styles.lable
                }>
                {item.label}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: colors.white,
    height: HP('100%'),
    width: WP('80%'),
    borderBottomLeftRadius: WP('1'),
    borderTopLeftRadius: WP('1'),
  },
  spacer: {
    marginTop: HP('1'),
  },
  lable: {
    fontFamily: family.OpenSans_Bold,
    color: colors.black_1,
    fontSize: size.small,
  },
  activeLabel: {
    fontFamily: family.OpenSans_Bold,
    color: colors.primary,
    fontSize: size.small,
  },
  person: {
    fontFamily: family.OpenSans_Bold,
    color: colors.white,
    fontSize: size.small,
  },
  drawerHeader: {
    height: Platform.OS === 'android' ? HP('25') : HP('23'),
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 15,
    borderBottomEndRadius: 15,
    width: '100%',
  },
  itemContainer: {
    paddingHorizontal: WP('3'),
  },
});

export {DrawerComponent};
