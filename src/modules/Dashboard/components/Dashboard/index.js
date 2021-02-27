/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {colors} from '../../../../common/Theme/colors';

const Dashboard = (props) => {
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('key');
      props.navigateToSignIn();
    } catch (e) {
      // remove error
    }
  };
  return (
    <ScrollView style={{flex: 1, margin: 50}}>
      <TouchableOpacity onPress={removeValue}>
        <Text style={{color: colors.blue[1]}}>Log out</Text>
      </TouchableOpacity>
      {props &&
        props.posts &&
        props.posts.map((item) => {
          return (
            <View style={{width: '90%', marginVertical: 10}} key={item.id}>
              <Text>{item.title}</Text>
            </View>
          );
        })}
    </ScrollView>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
