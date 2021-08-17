import React from 'react';
import { View } from 'react-native';

interface Props {
  isHorizontal?: boolean; // no siempre vamos a necesitar separar cosas verticalmente
  size: number; // no es opcional
}

const Separator = ({ isHorizontal, size }: Props) => (
  <View style={isHorizontal ? { width: size } : { height: size }} />
);

export default Separator;
