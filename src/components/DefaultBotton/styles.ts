import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainBoton,
    borderColor: colors.borderBoton,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    //color: 'blue',
    height: 50,
    marginTop: 10,
    width: '50%',
  },
  primary: {
    backgroundColor: colors.mainOrange,
    borderColor: colors.mainOrange,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.mainOrange,
  },
});

export const buttonTextColors = {
  primary: colors.white,
  secondary: colors.mainOrange,
};

export default styles;
