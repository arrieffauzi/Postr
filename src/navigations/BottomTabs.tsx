import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../pages/home/Home';
import Profile from '../pages/Profile';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
              let iconName = '';
              if (route.name === 'Home') {
                  iconName = focused ? 'home-sharp' : 'home-outline';
              } else if (route.name === 'Profile') {
                  iconName = focused ? 'person' : 'person-outline';
              }
              return <Icon name={iconName} size={size} color={color}/>
          },
        })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})