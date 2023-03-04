import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Animated, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Octicons from 'react-native-vector-icons/Octicons';
import { useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

// style
import global from '../../globalStyle/global';

// firebase
import { db } from '../../../config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
const database = 'IA';

// font
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// stickyheader
const headerhigh = 60;

const HeadTitle = props => {
  const [users, setUsers] = useState([]);

  const [fontsLoaded] = useFonts({
    roboto: global.roboto,
    poppins: global.poppins,
  });

  const usersCollectionRef = collection(db, database);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
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
    <View style={styles.containerTop}>
      <TouchableWithoutFeedback onPress={props.back}>
        <Octicons name="arrow-left" color={global.iconOn} size={30} />
      </TouchableWithoutFeedback>
      <View>
        {users.map(t => (
          <View key={t.id}>
            <Text style={{ marginHorizontal: global.m_20, marginTop: 2.5, color: global.whiteColor, fontSize: global.fontTitle, fontFamily: 'poppins' }}>{t.heading}</Text>
          </View>
        ))}
      </View>
      <View></View>
    </View>
  );
};
const InformationArchi = props => {
  const [users, setUsers] = useState([]);

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, headerhigh);
  const transY = diffClamp.interpolate({
    inputRange: [0, headerhigh],
    outputRange: [0, -headerhigh],
  });
  const usersCollectionRef = collection(db, database);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const [fontsLoaded] = useFonts({
    roboto: global.roboto,
    poppins: global.poppins,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0e17' }}>
      <View style={{ flex: 1, paddingVertical: global.m_10 }}>
        <Animated.View style={{ transform: [{ translateY: transY }], elevation: 4, zIndex: 100 }}>
          <HeadTitle back={() => props.navigation.goBack()} />
        </Animated.View>
        <Animated.FlatList
          data={users}
          keyExtractor={i => i.id}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <View style={{ marginTop: global.m_60 }}>
              <View style={{ marginHorizontal: global.m_10 }}>
                <View style={[styles.subhead]}>
                  <Image source={global.iamage} style={styles.img} />
                </View>

                <View style={styles.subhead}>
                  <Text style={styles.conText}>{item.con_1}</Text>
                </View>

                <View style={styles.subhead}>
                  <Text style={styles.stext}>{item.head_con_2}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_2}`}</Text>
                </View>

                <View style={styles.subhead}>
                  <Text style={styles.stext}>{item.head_con_3}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_3}`}</Text>
                </View>

                <View style={styles.subhead}>
                  <Text style={styles.stext}>{item.head_con_4}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_4}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_4_1}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_4_2}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_4_3}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_4_4}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_4_5}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_4_6}`}</Text>
                </View>

                <View style={styles.subhead}>
                  <Text style={styles.stext}>{item.head_con_5}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_5}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_5_1}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_5_2}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_5_3}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_5_4}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_5_5}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_5_6}`}</Text>
                </View>

                <View style={styles.subhead}>
                  <Text style={styles.stext}>{item.head_con_6}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_6}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_6_1}`}</Text>
                  <Text style={[styles.conText, styles.mtText]}>{`${item.con_6_2}`}</Text>
                </View>
              </View>
            </View>
          )}
          onScroll={e => scrollY.setValue(e.nativeEvent.contentOffset.y)}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  heading: {
    color: 'white',
  },
  text: {
    color: 'white',
  },
  containerTop: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: global.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: global.mt_20,
    position: 'absolute',

    top: 0,
    left: 0,
    right: 0,
    height: 60,
    elevation: 4,
  },
  textTop: {
    color: global.whiteColor,
    fontSize: RFValue(20, 680),
    fontFamily: 'roboto',
  },
  // content
  subhead: {
    marginVertical: global.mt_20,
  },
  stext: { fontSize: global.fontTitle, color: global.whiteColor, fontWeight: global.wt_8, fontFamily: 'poppins', paddingVertical: global.m_20 },
  conText: {
    fontSize: global.fontText,
    fontWeight: global.wt_4,
    color: global.second,
    fontFamily: 'poppins',
  },
  mtText: {
    marginVertical: global.m_10,
  },
  img: {
    width: global.width - 20,
    height: 400,
    resizeMode: 'stretch',
    borderRadius: 20,
  },
});
export default InformationArchi;
