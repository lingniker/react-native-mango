/*
* jindingwen 2017-06-04
* App 登录页
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';
import Button from './small/button';

var navigate;

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {name: '',
                  password: '',
                  psword: ''}
  }
  handlerPressLogin(){
    fetch('http://192.168.1.220:5003/api/registry',{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:"ling",
        password:"yuanping",
      })
    }).then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      return navigate("Home",{name:json.name});
    }).catch((err) => {console.log(err);})
  }
  render(){
    navigate = this.props.navigation.navigate;
    return (
      <View style={styles.container}>
        <View style={styles.img}>
          <Image style={styles.imgstyle} source={{uri: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=3030784779,1439758047&fm=85&s=2A887A23FEBA27BFD8B642A90300B016'}} />
          <Text>React Native</Text>
        </View>
        <View style={styles.input}>
          <View style={styles.ip}>
            <TextInput
              style={styles.inputstyle}
              onChangeText={(name) => this.setState({name})}
              underlineColorAndroid='transparent'
              placeholder='input your name'
              value={this.state.name}
            />
          </View>
          <View style={styles.ip}>
            <TextInput
              style={styles.inputstyle}
              onChangeText={(password) => this.setState({password})}
              underlineColorAndroid='transparent'
              placeholder='input your password'
              value={this.state.password}
            />
          </View>
          <View style={styles.foot}>
            <View style={styles.footleft}>
              <Button style={styles.btnstyle} onPress={()=>navigate('Sign',{name:"ling"})} label="注册"/>
            </View>
            <View style={styles.footright}>
              <Button onPress={this.handlerPressLogin.bind(this)} label="登录"/>

            </View>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backimg: {
    flex: 1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
  img: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgstyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  input: {
    flex: 6,
    flexDirection: 'column',
    paddingRight: 60,
    paddingLeft: 60,
  },
  inputstyle: {
    opacity: 0.5,
    backgroundColor: 'white',
    height: 28,
    fontSize: 12,
    padding: 0,
    paddingLeft: 20,
    borderRadius: 8,
  },
  ip: {
    height: 28,
    marginTop: 15
  },
  foot: {
    flex: 1,
    flexDirection: 'row',
  },
  footleft: {
    paddingLeft: 30,
    marginTop: 20
  },
    footright: {
    paddingLeft: 50,
    marginTop: 20
  },
  btnstyle: {
    color: '#ddd',
    marginLeft: 50,
  }
});
