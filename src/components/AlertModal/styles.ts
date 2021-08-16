//importo el componente de estilos de ract-native
import { StyleSheet } from 'react-native';
//importo las constantes de colores definidos para el proyecto
import { colors } from "../../utils/theme";

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  innerAlert: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 10,
    width: '65%',
  },
  button: {
    height: 40,
  },
  text: {
    marginVertical: 20,
  },
});

export default styles;
