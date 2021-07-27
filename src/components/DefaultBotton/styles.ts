import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainBoton,
    borderWidth: 2,
    borderColor: colors.borderBoton,
    borderRadius: 10,
    color: 'blue',
    height: 40,
    justifyContent: 'center',
    width: '30%',
  },
});

export default styles;
