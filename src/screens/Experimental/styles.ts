import { StyleSheet } from 'react-native';

import { DEVICE_WIDTH } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row', // para que la disposicion sea horizoantal
    justifyContent: 'center',
    width: '100%',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainPink,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30, //medida estandar
    width: '100%',
  },
  subtitle: {
    marginBottom: 15,
  },
  logo: {
    aspectRatio: 1,
    //marginTop: 15,
    minHeight: 170,
    width: DEVICE_WIDTH * 0.5,
  },
  safeArea: {
    backgroundColor: colors.mainPink,
  },
  scrollView: {
    backgroundColor: colors.mainOrange,
    flex: 1,
    width: '100%',
  },
});

export default styles;
