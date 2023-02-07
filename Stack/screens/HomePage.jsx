import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Materialicon from 'react-native-vector-icons/MaterialIcons';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import CardWord from '../Components/Home/CardWords';

const words = [
  'Design is not just what it looks like and feels like. Design is how it works.',
  'Good design is as little design as possible.',
  'Design is a solution to a problem. Art is a question to a problem.',
  'Design is not for philosophy, it’s for life.',
  'Design is an opportunity to continue telling the story, not just to sum everything up.',
  'Design is thinking made visual.',
  'Design is the silent ambassador of your brand.',
  'Design is where science and art break even.',
  'Design is not just what it looks like and feels like. Design is how it works.',
  'Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.',
];

const wordAuthors = ['Steve Jobs', 'Dieter Rams', 'John Maeda', 'Issey Miyake', 'Tate Linden', 'Saul Bass', 'Paul Rand', 'Robin Mathew', 'Steve Jobs', 'Charles Eames'];

const MILI_TO_DAY = 86400000;

const HomePage = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),

    Crimsonbold: require('../../assets/fonts/CrimsonPro/CrimsonPro-Bold.ttf'),
  });
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentAuthor, setCurrentAuthor] = useState(wordAuthors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextWord = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(nextWord);
    }, MILI_TO_DAY);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextAuthor = wordAuthors[Math.floor(Math.random() * wordAuthors.length)];
      setCurrentAuthor(nextAuthor);
    }, MILI_TO_DAY);
    return () => clearInterval(interval);
  }, []);

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0e17' }}>
      <ScrollView>
        <View style={styles.containerTop}>
          <View>
            <Text style={styles.topText}>Discover</Text>
          </View>
          <TouchableOpacity style={styles.len} onPress={() => navigation.navigate('language')}>
            <Materialicon name="language" size={26} color={'#ff8906'} />
          </TouchableOpacity>
        </View>

        <View style={styles.wordContianer}>
          <CardWord word={`"${currentWord}" - ${currentAuthor} `} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    // backgroundColor: 'blue',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 50,
    borderBottomColor: '#a7a9be90',
    borderBottomWidth: 1,
    // paddingBottom: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  topText: {
    fontSize: RFValue(24, 680),
    color: '#fffffe',
    fontWeight: 'bold',
  },
  wordContianer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  len: {
    marginTop: 6,
  },
});

export default HomePage;
