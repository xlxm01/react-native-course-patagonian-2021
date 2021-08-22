//Codigo copiado
import React from 'react';
import { View } from 'react-native';

import { DefaultBotton, Separator, Typography } from '../../components';
import styles from './styles';

//@ts-ignore
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator size={15} />
      <DefaultBotton
        text="Go To Experimental Screen"
        textSize={16}
        onPress={() => navigation.navigate('Experimental')} //Indica a que screen ir al presionar el boton
      />
    </View>
  );
};

export default WelcomeScreen;
