import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
  msg: string;
}

const DefaultButton = ({ onPress, msg }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.MainContainer}>
      <Text>{msg}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
