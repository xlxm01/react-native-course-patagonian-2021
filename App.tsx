import React from 'react';
const { NavigationContainer } = requiere('@react-navigation/native');

import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
      {/* El main Navigator necesita estard entro de umn NavigatorCOntainer para que funcione */}
    </NavigationContainer>
  );
};

export default App;
