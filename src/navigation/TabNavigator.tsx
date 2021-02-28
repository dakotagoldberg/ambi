import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../navigation/HabitStack';
import TracksScreen from '../navigation/TracksStack';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

// function Test() {
//     return (
//         <Text>heuuueueueu</Text>
//     )
// }

function Settings() {
  return (<Text>hi</Text>)
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: '#C7BFB0',
          showLabel: false,
          style: {
            backgroundColor: '#FFFCF5',
            paddingBottom: 0,
            borderTopWidth:0,
            elevation: 0,
            shadowOffset: {width: 0, height: -5},
            shadowColor: "#8E3D02",
            shadowOpacity: 0.2,
            shadowRadius: 10,
          }
        }}
    >
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          tabBarIcon: ({ color }) => {
            if (color == 'red') {
              return (
                <View style={{ 
                  marginBottom: 30,
                  backgroundColor: '#FFFCF5',
                  height: 95,
                  width: 95,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  }}>
                    <LinearGradient
                          colors={['#FDBC0C', '#FD800C']}
                          start={[0,0]}
                          end={[0,1]}
                          style={{
                            height: 75,
                            width: 75,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 38,
                            paddingLeft: 2,
                          }}
                          >
                      <Ionicons name="person-circle-sharp" size={40} color={'white'} />
                      </LinearGradient>
                </View>
              )
            }
            else {
              return (
                <Ionicons name="person-circle-sharp" size={34} color={color} />
              )
            }
          },
        }}
      />
      <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            // tabBarButton: props => <TouchableOpacity {...props} >
            // </TouchableOpacity>
            tabBarIcon: ({ color }) => {
              if (color == 'red') {
                return (
                  <View style={{ 
                    marginBottom: 30,
                    backgroundColor: '#FFFCF5',
                    height: 95,
                    width: 95,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                    }}>
                      <LinearGradient
                            colors={['#FDBC0C', '#FD800C']}
                            start={[0,0]}
                            end={[0,1]}
                            style={{
                              height: 75,
                              width: 75,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 38,
                            }}
                            >
                        <MaterialCommunityIcons name="checkbox-multiple-marked" size={40} color={'white'} />
                        </LinearGradient>
                  </View>
                )
              }
              else {
                return (
                  <MaterialCommunityIcons name="checkbox-multiple-marked" size={30} color={color} />
                )
              }
            },
          }}
      />
      <Tab.Screen 
        name="Tracks" 
        component={TracksScreen}
        options={{
          tabBarIcon: ({ color }) => {
            if (color == 'red') {
              return (
                <View style={{ 
                  marginBottom: 30,
                  backgroundColor: '#FFFCF5',
                  height: 95,
                  width: 95,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  }}>
                    <LinearGradient
                          colors={['#FDBC0C', '#FD800C']}
                          start={[0,0]}
                          end={[0,1]}
                          style={{
                            height: 75,
                            width: 75,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 38,
                          }}
                          >
                      <FontAwesome5 name="flag-checkered" size={35} color={'white'} />
                      </LinearGradient>
                </View>
              )
            }
            else {
              return (
                <FontAwesome5 name="flag-checkered" size={30} color={color} />
              )
            }
          },
        }} 
      />
    </Tab.Navigator>
  );
}