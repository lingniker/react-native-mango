/*
* jindingwen 2017-06-04
* App 无赏金页面
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

const styles = StyleSheet.create({
  homeHeader: {
    backgroundColor: '#E64A19'
  },
  homeHeaderTitle: {
    color: '#fff',
    alignSelf: 'center'
  }
});

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
        <Text>无偿问答</Text>
        <Text onPress={()=>navigate('Ques')}>问题详情</Text>
      </ScrollView>
    );
  }
}
const IndexNav = StackNavigator({
  OneTab: {
    screen: Pay,
    navigationOptions: {
      title: "无偿问答",
      headerStyle: styles.homeHeader,
      headerTitleStyle: styles.homeHeaderTitle,
      headerRight:<Button onPress={()=>navigate('Ques')} label="提问"/>,
      headerLeft: <View style={{width: 40,height: 1}}></View>
    }
  }
});
export default IndexNav;
