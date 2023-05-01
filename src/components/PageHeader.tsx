import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

type HeaderParam = {
  title: string;
};

const PageHeader = ({title}: HeaderParam) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 10,
  },
});
