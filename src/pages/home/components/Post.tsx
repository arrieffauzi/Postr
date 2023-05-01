import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {StateContext} from '../../../App';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Post = ({commentSection, postData}: any) => {
	const {state,setState,post,setPost}:any = useContext(StateContext);
  const [data, setData] = useState<any>([]);
  const [posting, setPosting] = useState<any>({
    id: 14,
    user: 14,
    post: 14,
  });
  const navigation = useNavigation();

  useEffect(() => {
    setData(postData);
  }, [postData]);

  const goToComment = (item: any) => {
    navigation.navigate('Comment', {item});
  };

  const getNextData = () => {
    let newData = [
      {
        id: 15,
        username: 'user 12',
        post: 'post 1',
      },
      {
        id: 16,
        username: 'user 14',
        post: 'post 1',
      },
      {
        id: 17,
        username: 'user 13',
        post: 'post 1',
      },
      {
        id: 90,
        username: 'user 15',
        post: 'post 1',
      },
    ];
    let temp = [...data];
    temp.push({
      id: posting.id,
      username: `user ${posting.user}`,
      post: `post ${posting.post}`,
    });
    setData(temp);
		setPost(temp)
    setPosting({
      id: posting.id + 1,
      user: posting.user + 1,
      post: posting.post + 1,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        // onEndReachedThreshold={5}
        onEndReached={() => {
          getNextData();
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.borderBottom}>
            <View style={styles.container}>
              <View style={styles.iconContainer}>
                <View style={styles.icon}>
                  <Icon name="person" size={20} />
                </View>
              </View>
              <View style={styles.postContainer}>
                <View>
                  <Text style={styles.username}>@{item.username}</Text>
                  <Text style={styles.post}>{item.post}</Text>
                </View>
                {commentSection && (
                  <View style={styles.replyContainer}>
                    <TouchableOpacity>
                      <Icon
                        name="chatbubble"
                        size={17}
                        onPress={() => {
                          goToComment(item);
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon name="repeat" size={17} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon name="heart" size={17} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon name="share-social" size={17} />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 5,
    marginBottom: 10,
  },
  postContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    fontStyle: 'italic',
  },
  post: {
    color: 'black',
    textAlign: 'justify',
    marginBottom: 10,
  },
  replyContainer: {
    alignItems: 'center',
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    flex: 1,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  borderBottom: {
    borderBottomWidth: 0.5,
  },
});
