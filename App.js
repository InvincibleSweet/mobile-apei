import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabBar from './Stack/Components/Navigate/TabBar';
import Language from './Stack/screens/LanguagePage';

import IntroUX from './Stack/screens/FirstCategory/IntroUX';
import ImpoUX from './Stack/screens/FirstCategory/ImportantUX';
import Interv from './Stack/screens/FirstCategory/interview';
import UserPersona from './Stack/screens/FirstCategory/UserPersona';
import InformationArchi from './Stack/screens/FirstCategory/InformationArchi';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="tabbar" component={TabBar} />

        <Stack.Screen name="language" component={Language} />
        <Stack.Screen name="introux" component={IntroUX} />
        <Stack.Screen name="impoux" component={ImpoUX} />
        <Stack.Screen name="interview" component={Interv} />
        <Stack.Screen name="persona" component={UserPersona} />
        <Stack.Screen name="InforArc" component={InformationArchi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
