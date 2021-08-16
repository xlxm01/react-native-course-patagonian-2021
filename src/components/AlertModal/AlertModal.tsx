import React from 'react';
import { Modal, Text, View } from 'react-native';

// regla: cuando uno importa un componente dentro de otro hay que hacerlo a la carpeta
import DefaultBotton from '../DefaultBotton';
import styles from './styles';

interface Props {
  message: string;
  onPressPrimaryButton: () => void; // significa q es un afuncion q no recibe ningun argumento y no retorna nada
  primaryButtonText: string;
  onPressSecondaryButton?: () => void;
  secondaryButtonText?: string;
  visible: boolean;
}

const AlertModal = ({
  message,
  onPressPrimaryButton,
  primaryButtonText,
  onPressSecondaryButton,
  secondaryButtonText,
  visible,
}: Props) => (
  <Modal animationType="fade" transparent visible={visible}>
    <View style={[styles.mainContainer]}>
      <View style={[styles.innerAlert]}>
        <Text style={[styles.text]}>{message}</Text>
        <DefaultBotton
          additionalStyle={styles.button}
          onPress={onPressPrimaryButton}
          text={primaryButtonText}
        />
        {// Codigo JS entre llaves si secondary trae algo y si onPress trae algo ... muestra el defaultbotton ... sino retorna null}
        {secondaryButtonText && onPressSecondaryButton ? (
          <>
            <DefaultBotton
              additionalStyle={styles.button}
              onPress={onPressSecondaryButton}
              text={secondaryButtonText}
              variant="secondary"
            />
          </>
        ) : null}
      </View>
    </View>
  </Modal>
);

AlertModal.defaultProps = {
  onPressSecondaryButton: null,
  secondaryButtonText: '',
};

export default AlertModal;
