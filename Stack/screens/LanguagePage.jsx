import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

const ButtonCard = props => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View
      style={styleCard.btnCard}
      onPress={() => {
        setIsSelected(!isSelected);
      }}
    >
      <Text style={{ color: 'white' }}>{props.lan}</Text>
      <View>{isSelected ? <Feather name="check" size={26} color={'#ff8906'} /> : ''}</View>
    </View>
  );
};

const LanguagePage = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0e17' }}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Octicons name="arrow-left" color={'#ff8906'} size={30} />
        </TouchableOpacity>
        <Text style={styles.textTop}>Bahasa Kontent</Text>
      </View>

      <View style={styles.language}>
        <TouchableOpacity style={styles.lanChild} onPress={() => props.navigation.goBack()}>
          <ButtonCard lan="English" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.lanChild} onPress={() => props.navigation.goBack()}>
          <ButtonCard lan="Indonesia" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.lanChild} onPress={() => props.navigation.goBack()}>
          <ButtonCard lan="Mandarin" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    // backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
  },
  textTop: {
    color: 'white',
    paddingLeft: 40,
    fontSize: RFValue(20, 680),
  },
  language: {
    marginTop: 20,
    flex: 1,
  },

  lanChild: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#424548',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
});

const styleCard = StyleSheet.create({
  btnCard: {
    backgroundColor: '424548',
    flexDirection: 'row',
    // backgroundColor: 'white',
    height: 30,
    justifyContent: 'space-between',
  },
});
export default LanguagePage;
