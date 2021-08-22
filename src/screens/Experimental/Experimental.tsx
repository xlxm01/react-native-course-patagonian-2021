import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { AlertModal, DefaultBotton, Separator, Typography } from '../../components';
import styles from './styles';

import { colors } from '../../utils/theme';

const arr = Array.from({ length: 6 }, (_, index) => index);

const ExperimentalScreen = () => {
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
          <MaterialIcon name="search" size={30} color={colors.mainOrange} />
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

export default ExperimentalScreen;
