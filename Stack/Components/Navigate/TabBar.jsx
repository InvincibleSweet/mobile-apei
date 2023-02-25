import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import LangScreen from './Stack/screens/LanguagePage';

import Book from '../../screens/BookPage';
import Love from '../../screens/LovePage';
import Home from '../../screens/HomePage';
// import LangScreen from './Stack/screens/LanguagePage';

import Homeicon from '../HomeIcon';
import Loveicon from '../LoveIcon';
import BookIcon from '../BookIcon';

const Tab = createBottomTabNavigator();
const Language = () => {
  return (
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
  );
};

export default Language;
