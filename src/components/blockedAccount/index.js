





import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { appImages } from '../../assets/images';
import { colors, HP, size, WP } from '../../services';
import {Button} from '../../components'
export const BlockedAccountsCard = ({
    name,
    image,
    profileID,
}) => {
    return (
        <View style={styles.cardMainContainer}>
            <View style={styles.cardImgContainer}>
                <Image
                    source={
                     image ? appImages.headerImg: null
                    }
                    style={styles.imageStyle}

                />
            </View>
            <View style={{ marginLeft: WP('4') }}>
                <Text style={styles.titleTextStyle}>{profileID}</Text>
                <Text style={styles.nameTextStyle}>{name}</Text>
            </View>
            <Button
                title={'Unblock'}
                titleStyle={{fontSize: 12}}
                containerStyle={styles.BtnContainerStyle}
                backgroundColor={colors.primary}
            />
        </View>
    );
};




const styles = StyleSheet.create({
    
    cardMainContainer: { 
        height: HP('12'), 
        width: WP('94'), 
        backgroundColor: 'transparent', 
        alignItems: 'center', 
        flexDirection: 'row', 
        alignSelf: 'center' 
    },
    cardImgContainer: { 
        height: HP('8'), 
        width: WP('14'), 
        backgroundColor: 'transparent', 
        borderRadius: WP('3')
    },
    imageStyle: { 
        height: HP('8'), 
        width: WP('14') 
    },
    titleTextStyle: { 
        fontSize: size.tiny, 
        fontWeight: 'bold', 
        color: colors.black_1 
    },
    nameTextStyle: { 
        fontSize: size.tiny, 
        color: colors.black_1 
    },
    BtnContainerStyle: { 
        height: HP('4'), 
        width: WP('30'), 
        marginLeft: WP('20'),
        borderRadius:WP('1.5')
    },
    BtnTitleStyle: { 
        fontSize: size.tiny, 
        fontWeight: 'normal' 
    },

});
// export const BlockedAccountsCard = ({
//     name,
//     age,
//     profession,
//     status,
//     distance,
//     image,
//     Invitestatus,
//     backgroundColor = colors.inputBackground,
// }) => {
//     return (
//         <View style={{  backgroundColor: 'transparent', marginTop: HP('5') }}>
//             <View style={[styles.statusTextContainerStyle, {backgroundColor}]}>
//                 <Text style={styles.statusTextStyle}>{Invitestatus}</Text>
//             </View>
//             <View style={styles.titleContainer}>
//                 <Image
//                     source={{
//                         uri: image ? image : 'https://picsum.photos/seed/picsum/300/300',
//                     }}
//                     style={styles.image}
//                 />
//                 <View style={styles.textContainer}>
//                     <Text style={styles.titleText}>{`${name}, ${age}`}</Text>
//                     <Text style={styles.text}>{profession}</Text>
//                     <Text style={styles.text}>{status}</Text>
//                 </View>
//                 <TouchableOpacity style={styles.buttonContainer}>
//                     <Image source={appIcons.newInvite} />
//                 </TouchableOpacity>
//             </View>
//             <View style={{marginBottom:WP('3')}}></View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     titleContainer: {
//         flexDirection: 'row',
//         borderRadius: WP('3'),
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: colors.inputBackground,
//         ...Platform.select({
//             ios: {
//                 shadowColor: '#000',
//                 shadowOffset: {
//                     width: 0,
//                     height: 2,
//                 },
//                 shadowOpacity: 0.22,
//                 shadowRadius: 2.22,
//             },
//             android: {
//                 elevation: 3,
//             },
//         }),
//         // marginVertical: WP('2'),
//     },
//     title: {
//         fontSize: size.xsmall,
//         fontFamily: family.OpenSans_Regular,
//         color: colors.gray_3,
//     },
//     image: {
//         height: WP('27'),
//         width: WP('27'),
//         borderRadius: WP('3'),
//         resizeMode: 'cover',
//     },
//     buttonContainer: {
//         height: WP('27'),
//         width: WP('27'),
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     titleText: {
//         fontSize: size.xsmall,
//         fontFamily: family.OpenSans_Bold,
//     },
//     textContainer: {
//         justifyContent: 'space-between',
//         height: WP('27'),
//         paddingVertical: WP('2'),
//     },
//     text: {
//         fontSize: size.tiny,
//         fontFamily: family.OpenSans_Regular,
//         color: colors.black_1,
//     },
//     buttonText: {
//         fontSize: size.tiny,
//         fontFamily: family.OpenSans_Bold,
//         color: colors.primary,
//     },
//     statusTextContainerStyle: {
//         height: HP('4'),
//         width: WP('30'),
//         backgroundColor: 'red',
//         position: 'absolute',
//         marginLeft: WP('62'),
//         marginTop: HP('-3'),
//         overflow: 'hidden',
//         borderTopLeftRadius: WP('2'),
//         borderTopRightRadius: WP('2'),
//     },
//     statusTextStyle: {
//         fontSize: size.tiny,
//         color: colors.white,
//         alignSelf: 'center',
//         marginVertical:WP('1')
//         // justifyContent: 'center'
//     },
// });
