import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');

import { HistoryScreen, HomeScreen } from '../screens';

import { colors } from '../utils/theme';

type Route = RouteProp<Record<string, object | undefined>, string>; //esta en la documentacion no hay mas explicacion

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string) => {
  let iconName = '';
  switch (routeName) {
    case 'HomeTab':
      iconName = 'home';
      break;
    case 'HistoryTab':
      iconName = 'history';
      break;
    default:
      iconName = 'help-outline';
      break;
  }

  return iconName;
};

const navigatorScreenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
    const iconName = getIconName(route.name);
    const iconSize = focused ? size * 1.2 : size;
    return <MaterialIcon name={iconName} size={iconSize} color={color} />;
  },
  tabBarAllowFontScaling: false, //para que al aumentar la letra del celular no cambie mi tamaño en la app
  tabBarActiveTintColor: colors.mainOrange,
  tabBarInactiveTintColor: colors.lightBlue,
  tabBarLabelStyle: {
    fontSize: 12,
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screnOptions={navigatorScreenOptions}>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen namr="HistoryTab" component={HistoryScreen} options={{ title: 'History' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
