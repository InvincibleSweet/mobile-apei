import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Card = props => {
  const [fontsLoaded] = useFonts({
    Crimsonbold: require('../../../assets/fonts/CrimsonPro/CrimsonPro-Bold.ttf'),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <View style={styles.card}>
      <Text style={styles.titleTies}>{props.word}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#FFFFFF70',
    borderWidth: 2,
    borderColor: '#C3F40080',
    marginTop: 20,
    // maxWidth: 400,
    // minWidth: 320,
    width: RFValue(345, 680),
    height: RFValue(115, 680),
    maxHeight: 150,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  titleTies: {
    fontSize: RFValue(18, 680),
    color: 'white',
    alignItems: 'center',
    fontWeight: '500',
    fontFamily: 'Crimsonbold',
    lineHeight: RFValue(30, 680),
  },
});
export default Card;
