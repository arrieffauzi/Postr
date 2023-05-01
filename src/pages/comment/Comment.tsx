import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import Post from '../home/components/Post';
import PageHeader from '../../components/PageHeader';
import {StateContext} from '../../App';
import { useTranslation } from 'react-i18next';

const Comment = () => {
  const route = useRoute();
  const stateContext: any = useContext(StateContext);
  const [username, setUsername] = useState([]);
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState<any>([]);
  const [postData, setPostData] = useState([]);
  const {t,i18n} = useTranslation()

  useEffect(() => {
    let param: any = route.params;
    param = [param.item];
    setPostData(param);
    setUsername(stateContext.state.username);
  }, []);

  const handleonChange = (value: string) => {
    setComment(value);
  };

  const handlePostComment = () => {
    let value = {
      id:getId(),
      username: getUsername(),
      post:comment
    }
    setCommentList([...commentList, value]);
    setComment('')
  };

  const getUsername = () => {
    var index = Math.floor(Math.random() * username.length);
    return username[index]
  };

  const getId =()=>{
    return Math.floor(Math.random()*100) + 1
  }

  return (
    <View>
      <PageHeader title={t('CommentPage')} />
      <Post commentSection={false} postData={postData} />
      {commentList.length > 0 && (
        <View style={styles.commentSection}>
          <Post commentSection={false} postData={commentList} />
        </View>
      )}
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={100}
            placeholder="Write Comment"
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

export default Comment;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 16,
    marginTop:10
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
  commentSection: {
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    marginVertical:10,
    borderColor:'gray'
  },
});
