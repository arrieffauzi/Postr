import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './navigations/BottomTabs';
import Navigations from './navigations/Navigations';

export const StateContext = createContext({});

const App = () => {
  const [state, setState] = useState({
    username:[],
    isFetch:false,
  });
  const [post, setPost] = useState([])

  useEffect(() => {
  }, [state])
  
  return (
    <StateContext.Provider value={{state, setState, post, setPost}}>
      <NavigationContainer>
        <Navigations/>
      </NavigationContainer>
    </StateContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
