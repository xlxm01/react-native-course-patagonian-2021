import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';

import styles, { buttonTextColors } from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  color?: string;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

// Good practices: a function always return somethings, and this somethings always same type.
// Name function: Begin with verb

const DefaultBotton = ({
  additionalStyle,
  //color,
  onPress,
  text,
  textSize,
  variant = 'primary',
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, styles[variant], additionalStyle]}
      onPress={onPress}
    >
      {/* Cada vez que le llegue algo en textSize va a tener que recalcular
      no importa que sea lo mismo, si fuera algo fijo como fontSize: 10 estaría mal */}
      <Text style={{ color: buttonTextColors[variant] || colors.white, fontSize: textSize }}> {text} </Text>
    </TouchableOpacity>
  );
};
// Define propiedades por defecto
DefaultBotton.defaultProps = {
  additionalStyle: {},
  color: colors.mainBoton,
  textSize: 14,
  variant: 'primary',
};

export default DefaultBotton;
