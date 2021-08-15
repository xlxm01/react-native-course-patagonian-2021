import React from 'react';
const { createNativeStackNavigator } = require('@react-navigation/bottom-tabs');

import { ExperimentalScreen, WelcomeScreen } from './screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="AuthStack" screnOptions={{ headerShown: false }}>
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ header.Shown: false }} />
  </Stack.Navigator>
);

export default MainNavigator;
