/*
* jindingwen 2017-06-04
* App 按钮组件
*/
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default class Button extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.button, this.props.buttonStyle]}>
        <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: "#BF360C",
    marginRight: 10,
    borderRadius: 3
  },
  label: {
    color: "#fff"
  }
});
