import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { AlertModal, DefaultBotton, Typography } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

//const arr = Array.from({ length:6 })

const App = () => {
  //Inicia el hook (mostrar un estado inmutable en una vble no se modifica sin importar lo que suceda con el componente)
  //- 1ra vble dele stado, 2do funcion q setea el state, false: es el estado inicial
  const [isModalVisible, setModalVisible] = useState(false);
  // una funcion para mostrar
  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  // termina el hook
  //View es como div, modal es un componente q se pone encima de la pantalla//
  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.mainPink }} />
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={styles.mainContainer}>
          <Typography color={colors.mainText} size={30} variant="bold">
            LAURA MURILLO
          </Typography>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
            }}
          />
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
            }}
          />
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
            }}
          />
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
            }}
          />
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
            }}
          />
          <Typography color={colors.mainText} size={20} variant="medium">
            Team Leader
          </Typography>
          <DefaultBotton
            color={colors.mainBoton} // este color va a sobreescribir cualquier color que uno le mande, incluso en el aditional styles
            //additionalStyle={styles.button}
            text="Mas Info"
            onPress={showModal}
            textSize={22}
            variant="primary"
          />
          <AlertModal
            message={'Licenciada en Analisis de Sistemas'}
            onPressPrimaryButton={hideModal}
            primaryButtonText="Ok"
            onPressSecondaryButton={hideModal}
            secondaryButtonText="Cancel"
            visible={isModalVisible}
          />
        </View>
      </ScrollView>
    </>
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
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 15,
    marginBottom: 15,
  },
  logo: {
    minHeight: 170,
    marginTop: 15,
    width: DEVICE_WIDTH * 0.5,
  },
  button: {
    backgroundColor: 'green',
    width: 50,
  },
});

export default App;
