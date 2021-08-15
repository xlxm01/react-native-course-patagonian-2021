import React, { useState } from "react";
import {} from 'react-native';

import {} from '../../components';
import styles from "./styles";

import { colors } from "../../utils/theme";

const arr = Array.from({ length: 6 }, (_,index) => index);
// arr = [0, 1, 2, 3, 4, 5]

const ExperimentalScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (

  );
};
