import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabs from './BottomTabs';
import Comment from '../pages/comment/Comment';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPost from '../pages/newPost/NewPost';

const Navigations = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Dashboard'>
      <Stack.Screen name="Dashboard" component={BottomTabs} />
      <Stack.Screen name="Comment" component={Comment} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  )
}

export default Navigations

const styles = StyleSheet.create({})