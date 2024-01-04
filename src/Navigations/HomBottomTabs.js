import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home';
import SettingsScreen from '../Screens/SettingsScreen';
import DaakScreen from '../Screens/DaakScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {HomeScreenWithBottomTab} from './Navigations';
import {Image, View} from 'react-native';
import {
  bellIcon,
  daakIcon,
  medicoseIcon,
  personIcon,
  settingsIcon,
} from '../Theme/IconsImages';
import {useColors} from '../Hooks';

const Tab = createBottomTabNavigator();

const HomeBottomTabs = () => {
  const Colors = useColors();
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 0,
          backgroundColor: Colors.primary,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          elevation: 20,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Image source={personIcon} style={{width: 19, height: 19}} />
          ),
        }}
        name="ProfileTab"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Image source={daakIcon} style={{width: 19, height: 19}} />
          ),
        }}
        name="DaakTab"
        component={DaakScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 25,
                marginBottom: 30,
              }}>
              <Image source={medicoseIcon} style={{width: 50, height: 50}} />
            </View>
          ),
        }}
        name="HomeTab"
        component={HomeScreenWithBottomTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Image source={bellIcon} style={{width: 19, height: 19}} />
          ),
        }}
        name="NotificationsTab"
        component={NotificationsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Image source={settingsIcon} style={{width: 19, height: 19}} />
          ),
        }}
        name="SettingsTab"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabs;
