import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabBar from './Stack/Components/Navigate/TabBar';
import Language from './Stack/screens/LanguagePage';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="language" component={Language} />
        <Stack.Screen name="tabbar" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
