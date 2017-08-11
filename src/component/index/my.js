/*
* jindingwen 2017-06-04
* App 个人主页
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class My extends Component{
  static navigationOptions = {
    title: "个人中心"
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>个人主页</Text>
        <Text onPress={()=>navigate('Login')}>去登录</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

});
