import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// const deviceWidth = Math.round(Dimensions.get('window').width);
import global from '../../../Stack/globalStyle/global';

const CardPage = props => {
  const [fondLoaded] = useFonts({
    poppins: global.poppins,
    roboto: global.roboto,
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fondLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={{ height: 230, width: global.width - 225, borderRadius: 5, flexDirection: 'column', marginTop: 20, marginHorizontal: 10, backgroundColor: '#34354170' }}>
      <View style={{ height: 'auto', flex: 1 }}>
        <Image source={props.img} style={{ width: '100%', resizeMode: 'cover', borderTopLeftRadius: 5, borderTopRightRadius: 5, alignItems: 'center' }} />
        <View>
          <Text style={{ fontSize: global.fontSubTitle, color: global.whiteColor, fontFamily: 'poppins', marginTop: 10, paddingHorizontal: 5 }}>{props.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardPage;
