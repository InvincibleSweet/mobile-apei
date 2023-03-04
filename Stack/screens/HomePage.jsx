import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Materialicon from 'react-native-vector-icons/MaterialIcons';

// fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// styles
import global from '../../Stack/globalStyle/global';

// components
import CardWord from '../Components/Home/CardWords';
import CardPage from '../Components/Home/CardPage';

// img
import Intro from '../../assets/Img/fid.png';
import Imux from '../../assets/Img/interview.png';
import Inter from '../../assets/Img/user-reseacrh.png';
import Persona from '../../assets/Img/persona.png';
import IA from '../../assets/Img/IA.png';
// Word
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
// const MILI_TO_DAY = 2000;

const DataPage = [
  {
    id: 1,
    txt: 'Introduction to UX',
    to: 'introux',
    img: Intro,
  },
  {
    id: 2,
    txt: 'Important of UX',
    to: 'impoux',
    img: Imux,
  },
  {
    id: 3,
    txt: 'User Interview',
    to: 'interview',
    img: Inter,
  },
  {
    id: 4,
    txt: 'User Persona',
    to: 'persona',
    img: Persona,
  },
  {
    id: 5,
    txt: 'Information Architecture',
    to: 'InforArc',
    img: IA,
  },
];
const HomePage = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins: global.poppins,
    roboto: global.roboto,
  });
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentAuthor, setCurrentAuthor] = useState(wordAuthors[0]);

  //
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
            <Materialicon name="language" size={26} color={'#fffffe90'} />
          </TouchableOpacity>
        </View>

        <View style={styles.wordContianer}>
          <CardWord word={`"${currentWord}" - ${currentAuthor} `} />
        </View>

        <View style={styles.wrapperCardOne}>
          <View>
            {/* <Text style={styles.titleCatOne}>User Expreience Research</Text> */}
            <Text style={styles.titleCatOne}>Fundamental User Expreience </Text>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            scrollEventThrottle={16}
            data={DataPage}
            keyExtractor={i => i.id}
            ItemSeparatorComponent={() => <View style={{ marginHorizontal: 5 }} />}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            removeClippedSubviews={true}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate(item.to)}>
                  <CardPage title={item.txt} img={item.img} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    // backgroundColor: 'blue',
    marginHorizontal: RFValue(10, 680),
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
    fontSize: RFValue(32, 680),
    color: '#fffffe',
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  wordContianer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  len: {
    marginTop: 6,
  },
  wrapperCardOne: {
    marginTop: 50,
  },
  titleCatOne: {
    color: 'white',
    fontSize: RFValue(24, 680),
    fontWeight: global.wt_8,
    fontFamily: 'roboto',
    marginHorizontal: RFValue(10, 680),
  },
  cardOne: {
    marginTop: 35,
  },
});

export default HomePage;
