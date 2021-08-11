import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';

import styles from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  color?: string;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultBotton = ({ additionalStyle, color, onPress, text, textSize }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, additionalStyle, { backgroundColor: color }]}
      onPress={onPress}
    >
      {/* Cada vez que le llegue algo en textSize va a tener que recalcular
      no importa que sea lo mismo, si fuera algo fijo como fontSize: 10 estaría mal */}
      <Text style={{ fontSize: textSize }}> {text} </Text>
    </TouchableOpacity>
  );
};
// Define propiedades por defecto buenas practicas
DefaultBotton.defaultProps = {
  additionalStyle: {},
  color: colors.mainBoton,
  textSize: 14,
};

export default DefaultBotton;
