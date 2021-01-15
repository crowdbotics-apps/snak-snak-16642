import React, { useState } from 'react';
import { Text, View, ScrollView, CheckBox, Image, } from 'react-native';
import { styles } from './styles';
import {
    Header,
    CustomTextInput,
    Button,
} from '../../../components';
import { appIcons, appImages, colors, HP, size, WP } from '../../../services';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import styles from './styles';

const ChatScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);


    return (
        <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.stickyContainer}>
                    <Header
                        title={'Nicole'}
                        style={{color:colors.primary}}
                        isImage={true}
                        profileImg= {appImages.headerImg}
                        showLeftIcon={true}
                        onLeftIconPress={() => navigation.navigate('ChatScreen')}
                    />
                    <Button
                        title={'See details of event'}
                        backgroundColor={colors.primary}
                        textColor={colors.black}
                        // containerStyle={{ marginTop: WP('10') }}
                        onPress={() => navigation.navigate('ChatScreen')}
                    />
                    <View style={styles.rightChatStyle}>
                        <Text style={styles.chatDescriptionStyle}>Neque porro quisqam est qui dolorem ipsum quie dolor sit amet, consectetur, adipisci velt. Quia dolor sit amet, consectetur, adipisci velit. Neque porro sit neque porro quisqam.</Text>
                        <Text style={styles.chatTimeDescriptionStyle}>12/12/2020 - 12:00</Text>
                    </View>
                    <View style={styles.leftChatStyle}>
                        <Text style={styles.chatDescriptionStyle}>Neque porro quisqam est qui dolorem ipsum quie dolor sit amet, consectetur, adipisci velt.</Text>
                        <Text style={styles.chatTimeDescriptionStyle}>12/12/2020 - 12:00</Text>
                    </View>
                    <View style={styles.rightChatStyle}>
                        <Text style={styles.chatDescriptionStyle}>Neque porro quisqam est qui dolorem ipsum quie dolor sit amet, consectetur, adipisci velt. Quia dolor sit amet, consectetur, adipisci velit. Neque porro sit neque porro quisqam.</Text>
                        <Text style={styles.chatTimeDescriptionStyle}>12/12/2020 - 12:00</Text>
                    </View>
                    <View style={styles.leftChatStyle}>
                        <Text style={styles.chatDescriptionStyle}>Neque porro quisqam est qui dolorem ipsum quie dolor sit amet, consectetur, adipisci velt.</Text>
                        <Text style={styles.chatTimeDescriptionStyle}>12/12/2020 - 12:00</Text>
                    </View>
                    <View style={styles.rightChatStyle}>
                        <Text style={styles.chatDescriptionStyle}>Neque porro quisqam est qui dolorem ipsum quie dolor sit amet, consectetur, adipisci velt. Quia dolor sit amet, consectetur, adipisci velit. Neque porro sit neque porro quisqam.</Text>
                        <Text style={styles.chatTimeDescriptionStyle}>12/12/2020 - 12:00</Text>
                    </View>
                    <View style={styles.leftChatStyle}>
                        <Text style={styles.chatDescriptionStyle}>Neque porro quisqam est qui dolorem ipsum quie dolor sit amet, consectetur, adipisci velt.</Text>
                        <Text style={styles.chatTimeDescriptionStyle}>12/12/2020 - 12:00</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.customInputMainContainer}>
            <CustomTextInput containerStyle={styles.smallInputFeildsStyle} label={'Message'} />
            <TouchableOpacity style={styles.arrowBtncontainer}>
                <Image 
                    style={styles.arrowIngStyle}
                    source={appIcons.arrowRight}
                />
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatScreen;
