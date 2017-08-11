import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
	container1: {
		flex: 2,
		paddingLeft: 3,
		paddingRight: 3,
	},
	release: {
		fontSize: 8
	},
	content: {
		fontSize: 10
	},
	picture: {
		width: 20,
		height: 20,
		borderRadius: 10,
		resizeMode: 'cover',
	},
	lineStyle: {
        backgroundColor:'lightgray',
        width:Dimensions.get('window').width,
        height:1
    },
    cellStyle: {
        width:Dimensions.get('window').width,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'flex-start'
        },
    fd: {
    	width:Dimensions.get('window').width - 25,
    	flexDirection:'column', 	
    	marginLeft: 5,
    },
    iconauthor: {
      width:Dimensions.get('window').width * 0.84,
    },
    icon: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width:Dimensions.get('window').width * 0.87
    },
	});

export default class Commentcontent extends Component{
  constructor(props) {
    super(props);
    this.state = {
    	data:[]
    }
  }
  componentWillMount(){
  	fetch('https://ikda.cc/api/redis/question')
  	.then((res)=>{
  		return res.json()
  	})
  	.then((json)=>{
  		this.setState(Object.assign({},this.state,{data:json}));
  	})
  	.catch((err)=>{
  		console.log(err);
  	})
  }
  render(){
    return (
      <ScrollView style={styles.container1}>
      	<View key={2} style={styles.cellStyle}>      	
      		<Image style={styles.picture} source={{uri: 'https://img3.doubanio.com/img/celebrity/small/2431.jpg'}} />  
      		<View key={1} style={styles.fd}>
            <View style={styles.icon}>
              <Text style={styles.iconauthor}>yueyunpneg</Text> 
              <FontAwesome name="thumbs-o-up" size={12} />                        
            </View>  	              
        		<Text>这是标题行,我想试试写的这么长他会不会自动换行,还差一点富士康荆防颗粒世界公开赛股份解放路卡手机付款了受到机构及认购静安寺国家开发力度撒个既然公交卡拉斯的宫颈癌是根据安科技宫颈癌是看到两个及人工加多少攻击热爱几个</Text>
        		<Text style={styles.release}>toutiao: 06-05 16:00</Text>
        	</View>
        	<View style={styles.lineStyle}></View>
        </View>        
      </ScrollView>
    );
  }

}