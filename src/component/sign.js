/*
* jindingwen 2017-06-04
* App 注册页
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
export default class Sign extends Component{
  static navigationOptions = {
    title: "个人中心",
    headerStyle : {backgroundColor:"red",height:20}
  }
  constructor(props) {
    super(props);
    this.state = {name: '',
                  password: '',
                  psword: ''}
  }

  handlerPress(){
    fetch('http://192.168.1.13:5003/api/registry',{
      method:"POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
     },
      body:JSON.stringify({
        name:this.state.name,
        password : this.state.password
      })
    }).then((response)=>response.json())
    .then((responseText)=>{
      this.setState({name:responseText.name});
      return navigate('Login');
    }).catch(() => {} )
  }



  render(){
     navigate = this.props.navigation.navigate;
    var name1 = this.state.name;
    return (

      <View style={styles.container}>
        <View style={styles.img}>
          <Image style={styles.imgstyle} source={{uri: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2694261119,3133114830&fm=175&s=44B51AD430F36B943A1BF9CD030030E2&w=218&h=146&img.JPEG'}} />
          <Text>React Native</Text>
        </View>
        <View style={styles.input}>
        <Text style={{color:"red"}}>{ name1 }</Text>
          <View style={styles.ip}>
            <TextInput
              ref="name"
              style={styles.inputstyle}
              onChangeText={(name) => this.setState({name})}
              underlineColorAndroid='transparent'
              placeholder='input your name'
              value={this.state.name}
            />
          </View>
          <View style={styles.ip}>
            <TextInput
              ref="password"
              style={styles.inputstyle}
              onChangeText={(password) => this.setState({password})}
              underlineColorAndroid='transparent'
              placeholder='input your password'
              value={this.state.password}
            />
          </View>
          <View style={styles.ip}>
            <TextInput
              secureTextEntry={true}
              ref="name1"
              style={styles.inputstyle}
              onChangeText={(psword) => this.setState({psword})}
              underlineColorAndroid='transparent'
              placeholder='input your password'
              value={this.state.psword}
            />
          </View>
          <View style={styles.foot}>
            <View style={styles.footleft}>
            <Button style={styles.btnstyle} onPress={this.handlerPress.bind(this)} label="提交"/>
            </View>
            <View style={styles.footright}>
              <Button onPress={()=>navigate('Ques')} label="登录"/>
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
    flex: 2,
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
    flex: 8,
    flexDirection: 'column',
    paddingRight: 40,
    paddingLeft: 40,
  },
  inputstyle: {
    opacity: 0.5,
    backgroundColor: 'white',
    height: 40,
    fontSize: 12,
    padding: 0,
    paddingLeft: 20,
    borderRadius: 8,
  },
  ip: {
    height: 60,
    marginTop: 5
  },
  foot: {
    flexDirection: 'row',
  },
  footleft: {
    paddingLeft: 50,
    marginTop: 10
  },
  footright: {
    paddingLeft: 50,
    marginTop: 10
  },
  btnstyle: {
    color: '#ddd',
    marginLeft: 50,
  }
});
