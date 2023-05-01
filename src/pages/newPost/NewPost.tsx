import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import PageHeader from '../../components/PageHeader';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StateContext} from '../../App';
import {useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const NewPost = () => {
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState([]);
  const {state, setState, post, setPost}: any = useContext(StateContext);
  const navigation = useNavigation();
  const {t,i18n} = useTranslation()

  useEffect(() => {
    setUsername(state.username);
  }, []);

  const handleonChange = (value: string) => {
    setComment(value);
  };

  const handlePostComment = () => {
    let value = {
      id: getId(),
      username: getUsername(),
      post: comment,
    };
    let temp = [...post];
    temp.unshift(value);
    setPost(temp);
    setComment('');
    navigation.goBack();
  };

  const getUsername = () => {
    var index = Math.floor(Math.random() * username.length);
    return username[index];
  };

  const getId = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  return (
    <View>
      <PageHeader title={t('PostPage')} />
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={100}
            placeholder="Write New Post"
            style={styles.input}
            value={comment}
            onChangeText={(value: string) => {
              handleonChange(value);
            }}
          />
        </View>
        <View>
          <Text style={styles.length}>{comment.length}/100</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePostComment}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
  },
  length: {
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
  },
});
