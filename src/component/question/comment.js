import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    flexDirection:'row',
    height: 21,    //通过大于TextInput的高度来弥补上面的问题
    justifyContent: 'flex-end'  //放置到底部
  },
  edit: {
    height: 40,
    fontSize: 20,
    marginTop:10,
    marginBottom:10,
    backgroundColor: 'lightgray',
    marginLeft: 10,//左右留出一定的空间
    marginRight: 10,
    padding: 0,
    borderRadius: 8,
    fontSize: 12,
  },
  left: {
    flex: 0.7
  },
  right: {
    flex: 0.15,
    justifyContent: 'center',
  },
  last: {
    flex: 0.15,
    justifyContent: 'center'
  },
  tag:{
    height:100,
    // flex : 1,
    flexDirection:'row',
    // width:100,
  },
  tagText:{
    height:30,
    marginLeft:10,
  }
});

export default class Comment extends Component{
  constructor(props) {
    super(props);
    this.state = {text: '',arr:["a","b"]}
  }
  handlerPress(){
    // fecth('http://192.168.1.13:5003/api/quetion',{
    //   methon:"POST",
    //   headers:{
    //     'Accept':'application/json',
    //     'Content-type':'application/json',
    //   },
    //   body:JSON.stringify({
    //     name:"ling",
    //     arr:this.state.arr,
    //     title:this.title,
    //     container:this.state.container,
    //   })
    //
    // })
  }
  render(){
    var arr1 = this.state.arr;
    return (
      <View style={styles.container}>

        <View style={styles.left}>
        {arr1.map((arr)=>{
          return <Text key={arr}>{arr}</Text>
        }
        )
      }
        <TextInput
          style={styles.edit}
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid='transparent'
          placeholder='输入标题'
          value={this.state.text}
        />
          <View style = {styles.tag}  >

          <Button title='提问问题'  onPress={()=> {
            if(this.state.arr.length<5){
            this.state.arr.push("hhh")
            this.setState({arr:this.state.arr})
          }
          }}></Button>
          <Button title='提问问题'  onPress={()=> {
            if(this.state.arr.length<5){
            this.state.arr.push("hhh1")
            this.setState({arr:this.state.arr})
          }
          }}></Button>
          <Button title='提问问题'  ></Button>
          <Button title='提问问题'  ></Button>
          <Text>javascript</Text>
          <Text>mongo</Text>
          </View>
          <TextInput
            style={styles.edit}
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid='transparent'
            placeholder='输入内容'
            value={this.state.text}
          />
          <Button title='提问问题'>
          </Button>
        </View>

      </View>
    );
  }

}
