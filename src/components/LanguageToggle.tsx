import {Alert, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {i18n} = useTranslation()

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    if(!isEnabled){
       i18n.changeLanguage('id')
    }else{
        i18n.changeLanguage('en')
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EN</Text>
      <Switch
        trackColor={{false: '#767577', true: '#767577'}}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      <Text style={styles.text}>ID</Text>
    </View>
  );
};

export default LanguageToggle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'white',
  },
  switch:{
    marginHorizontal:5
  },
  text:{
    fontSize:12,
    color:'black'
  }
});
