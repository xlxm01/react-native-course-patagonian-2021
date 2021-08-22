import React from 'react';
const { createNativeStackNavigator } = require('@react-navigation/native-stack');

import { ExperimentalScreen, WelcomeScreen } from '../screens';

const Stack = createNativeStackNavigator();
// toma por defecto la primera screen por ello usamos la propiedad
//inicialRouteName para indicar cual es la screen inicial
const MainNavigator = () => (
  <Stack.Navigator inicialRouteName="Welcome">
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShow: false }} />
  </Stack.Navigator>
);

export default MainNavigator;
