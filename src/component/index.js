/*
* jindingwen 2017-06-04
* App 首页
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Index from './index/index';
import Pay from './index/pay';
import Nopay from './index/nopay';
import My from './index/my';

const IndexTab = TabNavigator({
  Main: {
    screen: Index,
    navigationOptions: {
      title: "最新问答"
    }
  },
  Pay: { screen: Pay },
  Nopay: { screen: Nopay },
  My: { screen: My }
},{
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#E64A19',
      inactiveTintColor: 'gray',
      indicatorStyle:{
      backgroundColor: 'transparent'
      },
      style: {
        backgroundColor: '#fff',
        borderTopColor:'#ddd',
        borderTopWidth: 1
      },
      tabStyle: {
        padding: 3
      },
      labelStyle: {
        fontSize: 12
      }
    }
 }
);

const styles = StyleSheet.create({

});
export default IndexTab;
