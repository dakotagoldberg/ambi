import React from 'react'
import {Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

// function Test() {
//     return (
//         <Text>heuuueueueu</Text>
//     )
// }

export default function TabNavigator() {
  return (
    <Tab.Navigator
        initialRouteName='Home'
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Test" component={TestScreen} />
      {/* <Tab.Screen name="Settings" component={Test} /> */}
    </Tab.Navigator>
  );
}