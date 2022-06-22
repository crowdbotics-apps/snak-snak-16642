import React, { Component } from 'react'
import { Text, View, Image, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Filled from '../../../assets/svgs/Images/filled-circle.svg'
import Empty from '../../../assets/svgs/Images/empty-circle.svg'
import Abcd from '../../../assets/svgs/Images/abcd.svg'
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
                <Abcd />
                <View style={{ paddingHorizontal:20, marginTop:20 }}>
                  <Text style={styles.title}>THANK YOU FOR CHOSING US</Text>
                  <Text style={styles.subTitle}>Meet up with people in your profession, a social network for career-oriented get-togethers, or make some new like-minded friends.</Text>
                  <Text style={styles.subTitle}>Snak Snak is a meet-up app that allows you to meet people by sending invitations to events immediately.</Text>
                </View>
                <View style={styles.indicatorView}>
                  {true ? <Filled /> : <Empty />}
                  <View style={styles.spaceBetween} />
                  {false ? <Filled /> : <Empty />}
                </View>
            </View>
        </SafeAreaProvider>
    )
  }
}
