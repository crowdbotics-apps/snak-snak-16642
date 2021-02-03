import {
    Platform,
    StyleSheet
} from 'react-native';
import {
    colors,
    WP,
    HP,
    size,
    family
} from '../../../services';

export const styles = StyleSheet.create({

    flex: {
        flex: 1,
        backgroundColor: colors.white
    },
    stickyContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: WP('4'),
        marginBottom: WP('2'),
    },
    FirstViewMainContainer: {
        width: WP('94'),
        backgroundColor: colors.gray_5,
        alignSelf: 'center',
        borderRadius: WP('3'),
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    ButtonContainer: {
        height: HP('6'),
        width: WP('40'),
        borderRadius: WP('2'),
        marginTop: WP('4'),
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    SecoundViewMainContainer: {
        width: WP('94'),
        backgroundColor: colors.gray_5,
        alignSelf: 'center',
        borderRadius: WP('3'),
        marginTop: WP('7'),
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
            },
            android: {
                elevation: 3,
            },
        }),
    },

    ThirdViewMainContainer: {
        width: WP('94'),
        backgroundColor: colors.gray_5,
        alignSelf: 'center',
        borderRadius: WP('3'),
        marginTop: WP('7'),
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    thirdViewBtnStyle: {
        height: HP('6'),
        width: WP('75'),
        borderRadius: WP('2'),
        marginTop: WP('4'),
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    boldTitleTextStyle: {
        fontSize: size.large,
        fontWeight: 'bold',
        color: colors.black_1,
        marginVertical: WP('5'),
        marginLeft: WP('4'),
    },
    descriptionTextContainer: {width: WP('94'), backgroundColor: 'transparent', alignSelf: 'center', paddingLeft: WP('6'), marginBottom:WP('4') },
    descriptionTextStyle: { fontSize: size.tiny, color: colors.black_1, marginRight: WP('3'), marginTop:WP('4') },
    twoBtnViewContStyle: {width: WP('94'), backgroundColor: 'transparent', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginVertical:WP('7')},
    thirdViewContStyle: {width: WP('94'), backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center', marginVertical:WP('7') },
    smallBtnStyle: { width: WP('47'), backgroundColor: 'transparent', justifyContent: 'center', justifyContent: 'center', alignItems: 'center' },
    subscriptionTextStyle: { fontSize: size.tiny, fontWeight: 'bold', color: colors.black_1 },

});