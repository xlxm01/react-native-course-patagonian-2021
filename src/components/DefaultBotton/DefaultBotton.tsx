import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
}

const DefaultBotton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
        <Text> Mas Info </Text>
    </TouchableOpacity>
  );
};

export default DefaultBotton;
