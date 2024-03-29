import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList152161Navigator from '../features/ArticleList152161/navigator';
import ArticleList152160Navigator from '../features/ArticleList152160/navigator';
import ArticleList152159Navigator from '../features/ArticleList152159/navigator';
import Settings38716Navigator from '../features/Settings38716/navigator';
import UserProfile38709Navigator from '../features/UserProfile38709/navigator';
import Settings38708Navigator from '../features/Settings38708/navigator';
import Settings38706Navigator from '../features/Settings38706/navigator';
import SignIn238704Navigator from '../features/SignIn238704/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList152161: { screen: ArticleList152161Navigator },
ArticleList152160: { screen: ArticleList152160Navigator },
ArticleList152159: { screen: ArticleList152159Navigator },
Settings38716: { screen: Settings38716Navigator },
UserProfile38709: { screen: UserProfile38709Navigator },
Settings38708: { screen: Settings38708Navigator },
Settings38706: { screen: Settings38706Navigator },
SignIn238704: { screen: SignIn238704Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
