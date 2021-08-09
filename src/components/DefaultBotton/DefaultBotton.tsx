import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface Props {
  additionalStyle?: object;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultBotton = ({ additionalStyle, onPress, text, textSize }: Props) => {
  return (
    <TouchableOpacity style={[styles.mainContainer, additionalStyle]} onPress={onPress}>
      <Text style={{ fontSize: textSize }}> {text} </Text>
    </TouchableOpacity>
  );
};
// Define propiedades por defecto
DefaultBotton.defaultProps = {
  additionalStyle: {},
  textSize: 12,
};

export default DefaultBotton;
