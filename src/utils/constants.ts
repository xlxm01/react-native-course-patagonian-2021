import { Platform } from 'react-native';

//las constnates globales se ponen en mayusculas, si ejecuto mi app no va a cambiar el SO
//por lo cual es buena practica guardar la informacion en vbles globales del sistema
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
