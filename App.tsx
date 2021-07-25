import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
    return (
      <View style={styles.mainContainer}>
        <Text>LAURA MURILLO</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#ffe4e1',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  }
});

export default App;
