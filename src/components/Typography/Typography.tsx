import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import { colors } from '../../utils/theme';
//import { IS_IOS } from '../../utils/constants';

const typographyVariant = {
  bold: 'Raleway-Italic',
  italic: 'Raleway-Italic',
  medium: 'Raleway-Medium',
  regular: 'Raleway-Regular',
};
interface Props {
  align?: 'left' | 'center' | 'rigth' | 'justify';
  children: ReactNode;
  color?: string;
  size?: number;
  variant?: keyof typeof typographyVariant;
}

//Pick hace que herede solo algunos parametros de Props para que no de error de tipo de datos
const getTextStyle = ({
  align,
  color,
  size,
  variant = 'regular',
}: Pick<Props, 'align' | 'color' | 'size' | 'variant'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    fontFamily: typographyVariant[variant],
  };
  return textStyle;
};

const Typography = ({ align, children, color, size, variant }: Props) => {
  const textStyle = getTextStyle({ align, color, size, variant });
  return (
    <Text allowFontScaling={false} style={textStyle}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: colors.black,
  size: 14,
  variant: 'regular',
};

export default Typography;
