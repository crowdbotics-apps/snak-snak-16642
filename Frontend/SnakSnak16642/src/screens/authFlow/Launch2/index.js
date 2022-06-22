import React, { Component } from 'react'
import { Text, View, Image, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Filled from '../../../assets/svgs/Images/filled-circle.svg'
import Empty from '../../../assets/svgs/Images/empty-circle.svg'
import {styles} from './styles';
import { Button } from 'react-native-paper';
import MyStatusBar from '../../../Components/MyStatusBar'


export default class Onboarding extends Component {

  render() {
    return (
        <SafeAreaProvider>
            <MyStatusBar backgroundColor={'#800203'} barStyle="light-content" />
            <View style={styles.container}>
                {/* <Onboarding2 height={'100%'} style={{position:'absolute', bottom:0, backgroundColor:'blue'}} /> */}
                <Image
                  style={styles.logoStyle}
                  source={require('../../../assets/Images/Logo.png')}
                />
                <View style={{ paddingHorizontal:20 }}>
                  <Text style={styles.title}>THANK YOU FOR CHOSING US</Text>
                  <Text style={styles.subTitle}>It allows you to send invites for events and activities you want to do, with the people you want to hang out with.</Text>
                  <Text style={styles.subTitle}>Once you have found a user you want to match with you can send them a place and time and allow them to accept your invitation</Text>
                </View>
                <View style={styles.bottomView}>
                  <Button 
                    mode="contained" 
                    color="white" 
                    labelStyle={styles.buttonLabelStyle} 
                    uppercase={false} 
                    onPress={() => console.log('Pressed')}
                  >Get started</Button>
                  <View style={styles.indicatorView}>
                    {false ? <Filled /> : <Empty />}
                    <View style={styles.spaceBetween} />
                    {true ? <Filled /> : <Empty />}
                  </View>
                </View>
                <Image
                  style={styles.image2}
                  resizeMode={'contain'}
                  source={require('../../../assets/Images/Onboarding2.png')}
                />
            </View>
        </SafeAreaProvider>
    )
  }
}
