import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default {
  // #2D2D2D
  primary: '#0f0e17',
  // primary: '#2D2D2D',

  second: '#EDEDED',
  whiteColor: '#eff0f3',
  iconOn: '#C3F400',
  m_20: 20,
  m_40: 40,
  m_60: 60,
  m_80: 80,

  m_20: 20,
  m_10: 10,
  m_5: 5,
  mt_20: RFValue(20, 680),
  fontTitle: RFValue(24, 680),
  fontSubTitle: RFValue(18, 680),
  fontText: RFValue(16, 680),
  wt_8: '800',

  wt_6: '600',
  wt_5: '500',
  wt_4: '400',
  width: Math.round(Dimensions.get('window').width),
  poppins: require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
  roboto: require('../../assets/fonts/Roboto/RobotoCondensed-Regular.ttf'),
  skillDesign: require('../../assets/Img/skillux.png'),
  interviewImg: require('../../assets/Img/interviewperson.jpg'),
};
