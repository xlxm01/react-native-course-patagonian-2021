import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';

import { DefaultBotton } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

/* const showAlert = () => {
  Alert.alert('Título', 'Licenciada en Analisis de Sistemas');
}; */

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Modal animationType="fade" transparent visible={isModalVisible}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            flex: 1,
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderRadius: 15,
              justifyContent: 'center',
              paddingBottom: 20,
              paddingTop: 10,
              width: '65%',
            }}
          >
            <Text style={{ marginVertical:20}}>Licenciada en Analisis de Sistemas</Text>
            <DefaultBotton onPress={hideModal} text="OK" />
          </View>
        </View>
      </Modal>
      <Text style={styles.title}>LAURA MURILLO</Text>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
        }}
      />
      <Text style={styles.subtitle}>Team Leader</Text>
      <DefaultBotton text="Mas Info" onPress={showModal} textSize={14} />
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
