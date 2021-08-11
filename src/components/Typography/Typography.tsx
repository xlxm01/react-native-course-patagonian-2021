import React, { ReactNode } from 'react';
import { Text } from 'react-native';

//import {colors} from '../../colors/themes';
//import { IOS_ANDROID } from '../../../utils/constants.ts';

interface Props {
  align: 'left' | 'center' | 'rigth' | 'justify';
  color: string;
  children: ReactNode;
  size: number;
  variant?: keyof typeof typographyVariant;
}

const typographyVariant = {
  bold: 'Raleway-Bold',
  italic: 'Raleway-Italic',
  medium: 'Raleway-Medium',
  regular: 'Raleway-Regular',
};

/* const getTextStyle = ({ align, color, size }: Props) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    //fontFamily: typographyVariant[variant],
  };
  return textStyle;
};*/

const Typography = ({ children }: Props) => {
  //const textStyle = getTextStyle({ align, color, size });
  return <Text>{children}</Text>;
};

export default Typography;
