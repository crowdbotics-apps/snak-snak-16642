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
    container: {
        backgroundColor: colors.white,
        height: HP('92'),
    },
    flexCon: {
        flex: 1,
    },
    stickyContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: WP(4),
        marginBottom: WP('3'),
    },
    filterTitle: {
        fontSize: size.xsmall,
        fontFamily: family.OpenSans_Bold,
        color: colors.primary,
        marginTop: HP('1'),
    },
    top: {
        marginTop: WP('5'),
    },
    rightChatStyle: {
        width: WP('70'),
        alignSelf: 'flex-end',
        borderRadius: WP('3'),
        marginTop: WP('5'),
        backgroundColor: colors.gray_5,
        overflow: 'scroll'
    },
    leftChatStyle: {
        width: WP('70'),
        alignSelf: 'flex-start',
        borderRadius: WP('3'),
        marginTop: WP('5'),
        backgroundColor: colors.gray_4,
        overflow: 'scroll'
    },
    chatDescriptionStyle: {
        fontSize: size.tiny,
        marginVertical: WP('2'),
        marginHorizontal: WP('2')
    },
    chatTimeDescriptionStyle: {
        fontSize: size.tiny,
        marginVertical: WP('2'),
        marginHorizontal: WP('2'),
        alignSelf: 'flex-end'
    },
    customInputMainContainer: {
        height: HP('12'),
        width: WP('100'),
        alignSelf: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        alignItems: 'center',
        flexDirection: 'row'
    },
    arrowBtncontainer: {
        height: HP('7'),
        width: WP('12'),
        borderRadius: WP('3'),
        marginRight: WP('5'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    arrowIngStyle: {
        height: HP('5'),
        width: WP('6'),
        resizeMode: 'contain'
    },
    smallInputFeildsStyle: {
        width: WP('70'),
        height: HP('8'),
        marginLeft: WP('5')
    },
});