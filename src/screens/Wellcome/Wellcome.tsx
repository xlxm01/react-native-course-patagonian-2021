import React from "react";
import { View } from "react-native";

import Typography from "src/components/Typography";

import { DefaultBotton, Separator, Typhography } from "../../components";
import styles from "./styles";

import { goToScreen, navigatorRef } from "../../navigation/controls";

const WelcomeScreen = ({ navigator }) = > {
  return (
    <View style = {styles.mainContainer} >
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator size={15} />
      <DefaultBotton text="Go To Tabs" textSize={16} onPress= {() => navigator.navigate('Experimental')} />
    </View>
  );
};

export default WelcomeScreen;
