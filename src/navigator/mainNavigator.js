import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed5686895Navigator from '../features/Feed5686895/navigator';
import CopyOfFeed5686893Navigator from '../features/CopyOfFeed5686893/navigator';
import CopyOfFeed5686892Navigator from '../features/CopyOfFeed5686892/navigator';
import CopyOfFeed5686891Navigator from '../features/CopyOfFeed5686891/navigator';
import CopyOfFeed5686890Navigator from '../features/CopyOfFeed5686890/navigator';
import CopyOfFeed5686889Navigator from '../features/CopyOfFeed5686889/navigator';
import CopyOfFeed5686888Navigator from '../features/CopyOfFeed5686888/navigator';
import CopyOfFeed5686887Navigator from '../features/CopyOfFeed5686887/navigator';
import CopyOfFeed5686886Navigator from '../features/CopyOfFeed5686886/navigator';
import CopyOfFeed5686885Navigator from '../features/CopyOfFeed5686885/navigator';
import CopyOfFeed5686884Navigator from '../features/CopyOfFeed5686884/navigator';
import Maps65635Navigator from '../features/Maps65635/navigator';
import Add-Item65634Navigator from '../features/Add-Item65634/navigator';
import Maps65630Navigator from '../features/Maps65630/navigator';
import UserProfile65626Navigator from '../features/UserProfile65626/navigator';
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
Feed5686895: { screen: Feed5686895Navigator },
CopyOfFeed5686893: { screen: CopyOfFeed5686893Navigator },
CopyOfFeed5686892: { screen: CopyOfFeed5686892Navigator },
CopyOfFeed5686891: { screen: CopyOfFeed5686891Navigator },
CopyOfFeed5686890: { screen: CopyOfFeed5686890Navigator },
CopyOfFeed5686889: { screen: CopyOfFeed5686889Navigator },
CopyOfFeed5686888: { screen: CopyOfFeed5686888Navigator },
CopyOfFeed5686887: { screen: CopyOfFeed5686887Navigator },
CopyOfFeed5686886: { screen: CopyOfFeed5686886Navigator },
CopyOfFeed5686885: { screen: CopyOfFeed5686885Navigator },
CopyOfFeed5686884: { screen: CopyOfFeed5686884Navigator },
Maps65635: { screen: Maps65635Navigator },
Add-Item65634: { screen: Add-Item65634Navigator },
Maps65630: { screen: Maps65630Navigator },
UserProfile65626: { screen: UserProfile65626Navigator },
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
