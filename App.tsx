import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';

import { DefaultBotton } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

const showAlert = () => {
  Alert.alert('Títulos', 'Nada');
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>LAURA MURILLO</Text>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
        }}
      />
      <Text style={styles.subtitle}>Team Leader</Text>
      <DefaultBotton onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainPink,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.mainText,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: colors.mainText,
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: 15,
    marginBottom: 15,
  },
  logo: {
    minHeight: 170,
    marginTop: 15,
    width: DEVICE_WIDTH * 0.5,
  },
});

export default App;
