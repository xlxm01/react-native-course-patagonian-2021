import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH, DEVICE_HEIGH } from './src/utils/dimensions';

const showAlert = () => {
  Alert.alert('Título','Licenciada en Analisis de Sistemas');
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>LAURA MURILLO</Text>
      <Image style={styles.logo} resizeMode='contain' source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU' }} />
      <Text style={styles.subtitle}>Team Leader</Text>
      <TouchableOpacity onPress={showAlert}>
        <Text> Mas Info </Text>
      </TouchableOpacity>
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
  boton: {
    color: colors.mainBoton,
    marginTop: 20,
  },
});

export default App;
