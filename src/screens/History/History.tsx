import React from 'react';
import { View } from 'react-native';

import { DefaultBotton, Separator, Typography } from '../../components';
import styles from './styles';

import { resetNavigation } from '../../navigation/controls';

const HistoryScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20}>History Screen</Typography>
      <Separator size={10} />
      <DefaultBotton text="Log Out" onPress={resetNavigation} />
    </View>
  );
};

export default HistoryScreen;
