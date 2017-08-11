/*
* jindingwen 2017-06-04
* App 有赏金的页面
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from '../small/button';



var navigate;

class Pay extends Component{
  constructor(props){
    super(props);
    navigate = this.props.navigation.navigate;
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text>有赏问答</Text>
        <Text onPress={()=>navigate('Ques')}>问题详情</Text>
      </ScrollView>
    );
  }
}
const IndexNav = StackNavigator({
  OneTab: {
    screen: Pay,
    navigationOptions: {
      title: "有赏问答",
    }
  }
});
export default IndexNav;
