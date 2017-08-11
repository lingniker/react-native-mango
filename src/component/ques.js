/*
* jindingwen 2017-06-04
* App 问题详情页
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Question from './question/question';
import Comment from './question/comment';
import Commentcontent from './question/commentcontent';


const styles = StyleSheet.create({
  c: {
    flex:10,
    flexDirection:'column'
  },
  que: {
    flex: 9.4
  },
  com: {
    flex: 0.6
  }
});

export default class Ques extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={styles.c}>
        <View style={styles.com}>
          <Comment></Comment>
        </View>
      </View>
    );
  }

}
