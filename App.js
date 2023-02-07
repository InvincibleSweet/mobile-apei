import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Stack/screens/HomePage';
import Love from './Stack/screens/LovePage';
import Book from './Stack/screens/BookPage';

import Homeicon from './Stack/Components/HomeIcon';
import Loveicon from './Stack/Components/LoveIcon';
import BookIcon from './Stack/Components/BookIcon';

// import Octicons from 'react-native-vector-icons/Octicons'; //home
// import Feather from 'react-native-vector-icons/Feather'; //book-open
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: '#0f0e17', height: 60, borderTopWidth: 0 },
          tabBarInactiveTintColor: '#fffffe',
          tabBarActiveTintColor: '#ff8906',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => <Homeicon focused={focused} name="home" />,
          }}
        />
        <Tab.Screen
          name="Love"
          component={Love}
          options={{
            tabBarIcon: ({ focused }) => <BookIcon focused={focused} name="book-open" />,
          }}
        />
        <Tab.Screen
          name="Book"
          component={Book}
          options={{
            tabBarIcon: ({ focused }) => <Loveicon focused={focused} name="hearto" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
