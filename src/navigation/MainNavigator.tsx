import React from 'react';
const { createNativeStackNavigator } = require('@react-navigation/native-stack');

import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();
// toma por defecto la primera screen por ello usamos la propiedad
//inicialRouteName para indicar cual es la screen inicial
const MainNavigator = () => (
  <Stack.Navigator initialRouteName="AuthStack" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AuthStack" component={AuthStack} />
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
