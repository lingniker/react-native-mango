/*
* jindingwen 2017-06-04
* App 入口导航器
*/
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Index from './component';
import Login from './component/login';
import Sign from './component/sign';
import Ques from './component/ques';
import Button from './component/small/button';

const styles = StyleSheet.create({
  homeHeader: {
    backgroundColor: '#E64A19'
  },
  homeHeaderTitle: {
    color: '#fff',
    alignSelf: 'center'
  }
});

// const { navigate } = this.props.navigation;
const App = StackNavigator({
  Login:{ screen: Login ,navigationOptions: {title:"ling"}},
  Home: {
    screen: Index,
    navigationOptions: ({navigation}) => ({
      title:"123",
      headerStyle: styles.homeHeader,
      headerTitleStyle: styles.homeHeaderTitle,
      headerRight:<Button onPress={()=>navigation.navigate('Ques')} label="提问"/>,
      headerLeft: <View style={{width: 40,height: 1}}></View>
    }),
    navigationOptions: ({navigation}) => ({
      title:"1234",
      headerStyle: styles.homeHeader,
      headerTitleStyle: styles.homeHeaderTitle,
      headerRight:<Button onPress={()=>navigation.navigate('Ques',{name:'Ling'})} label="提问"/>,
      headerLeft: <View style={{width: 40,height: 1}}></View>
    })
  },
  Sign: { screen: Sign  ,navigationOptions: ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`,
  })
},
  Ques: { screen: Ques ,navigationOptions:({navigation}) => ({
    title: `${navigation.state.params.name}`
  })
}
});

export default App;
