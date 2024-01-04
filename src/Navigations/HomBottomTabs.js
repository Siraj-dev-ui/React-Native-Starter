import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home';
import SettingsScreen from '../Screens/SettingsScreen';
import DaakScreen from '../Screens/DaakScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {HomeScreenWithBottomTab} from './Navigations';

const Tab = createBottomTabNavigator();

const HomeBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="SettingsTab" component={SettingsScreen} />
      <Tab.Screen name="DaakTab" component={DaakScreen} />
      <Tab.Screen name="HomeTab" component={HomeScreenWithBottomTab} />
      <Tab.Screen name="NotificationsTab" component={NotificationsScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeBottomTabs;
