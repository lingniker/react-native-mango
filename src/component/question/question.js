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
	container: {
		flex: 9,
		paddingLeft: 3,
		paddingRight: 3
	},
	release: {
		fontSize: 8
	},
	content: {
		fontSize: 10
	},
  container1: {
    
    paddingLeft: 3,
    paddingRight: 3,
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
      
      flexDirection:'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width:Dimensions.get('window').width * 0.87
    },
    comment: {
      paddingRight: 5
    },
    commenti: {
      fontSize: 12
    }
});

export default class Question extends Component{
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
      <ScrollView style={styles.container}>
        <Text>这是标题行,我想试试写的这么长他会不会自动换行,还差一点</Text>
        <Text style={styles.release}>toutiao: 06-05 16:00</Text>
        <Text style={styles.content}>这是问题的具体内容</Text>
        <View key={2} style={styles.cellStyle}>       
          <Image style={styles.picture} source={{uri: 'https://img3.doubanio.com/img/celebrity/small/2431.jpg'}} />  
          <View key={1} style={styles.fd}>
            <View style={styles.icon}>
              <Text style={styles.iconauthor}>yueyunpneg</Text> 
              <FontAwesome name="thumbs-o-up" size={12} />                       
            </View> 
            <View style={styles.lineStyle}></View> 
            <View style={styles.comment}>                
              <Text style={styles.commenti}>这是标题行,我想试试写的这不会自动换行,还jjfsdlkjs差一士康荆jfsdkjagj防颗粒世反倒是看了几个领导开发过节费单联开关进口关键时刻了各级国家认可根据梵蒂冈今日而过福建省的快捷方式的几个加人工客服登记管理方可根据开发工具数量估计是开放经济结构框架圣诞快乐看风景萨洛克根据艾瑞攻击力富可敌国好几个和任何龟儿UI节日而根据客人国家历史价格给让国际控股及高级啊诶人根据阿尔关机啦公积金拉飞机爱上界公开赛股封建时代立刻感觉速度更快速度较高的分手快乐赶紧死贵金属大富科技份解放路卡手机付款了受到机构及认购静安寺国家开发力度撒个既然公交卡拉斯的宫颈癌是根据安科技宫颈癌是看到两个及人工加多少攻击热爱几个</Text>
              <Text style={styles.release}>toutiao: 06-05 16:00</Text>
            </View>
          </View>
          <View style={styles.lineStyle}></View>
        </View>        
      </ScrollView>

    );
  }

}