import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { AlertModal, DefaultBotton, Typography } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';
import Separator from 'src/components/Separator';

// se crea un array de 6 elementos
const arr = Array.from({ length: 6 }, (_, index) => index);

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
      <SafeAreaView style={styles.safeArea} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <Typography color={colors.mainText} size={30} variant="bold">
            LAURA MURILLO
          </Typography>
          <Separator size={10} />
          {/* recorro el array y mapeo por cada iteracion que retorne este componente view
          parametro key cuanod son elementos iguales no los distingue, si alguno de ellos actualiza, causara q
          todos se actualicen. Le easignamos una key unica para identificar a cada uno*/}
          {arr.map((item) => (
            <View key={`image-${item}`}>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
                }}
              />
              <Separator size={10} />
            </View>
          ))}
          <View style={styles.horizontalContainer}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
              }}
            />
            <Separator isHorizontal size={10} />
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmNUH9WwaxR9MplaF9ko2Z3rWkTiGYwDGR0kMKeZ7zr7adktK0aiQgJmMb_lVBk0m84&usqp=CAU',
              }}
            />
          </View>
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
  horizontalContainer: {
    flexDirection: 'row', // para que la disposicion sea horizoantal
    justifyContent: 'center',
    width: '100%',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainPink,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30, //medida estandar
    width: '100%',
  },
  subtitle: {
    marginBottom: 15,
  },
  logo: {
    aspectRatio: 1,
    //marginTop: 15,
    minHeight: 170,
    width: DEVICE_WIDTH * 0.5,
  },
  safeArea: {
    backgroundColor: colors.mainPink,
  },
  scrollView: {
    backgroundColor: colors.mainOrange,
    flex: 1,
    width: '100%',
  },
});

export default App;
