import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StateContext} from '../../App';
import Post from './components/Post';
import FloatingButton from './components/FloatingButton';
import LanguageToggle from '../../components/LanguageToggle';

const Home = () => {
  const {state, setState, post, setPost}: any = useContext(StateContext);

  const getUser = () => {
    const data = require('../../json/username.json');
    const username = [];
    for (let i = 0; i < 50; i++) {
      username.push(data[i].username);
    }
    setState({...state, username: username});
  };

  const getPosting = () => {
    let res = require('../../json/post.json');
    setPost(res);
  };

  useEffect(() => {
    getPosting();
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <LanguageToggle/>
      <Post commentSection={true} postData={post} />
      <FloatingButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
