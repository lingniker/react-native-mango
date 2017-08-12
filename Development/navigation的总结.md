# 关于导航栏的一些知识点
  
#### （个人总结 有错请纠正  发送邮箱至 lingyuanping@outlook.com）

## 引用 navigation 有一个函数 将你的组件变成 一个切换页面的函数 StackNavigation

### navigation.navigater 属性才可以跳转屏幕

### navigation.state.params  参数的传递 （获得组件传递过来的参数 需要用``（这两小点不是单引号，是上点号））

const App = StackNavigation(
  Home:{screen:Index,NavigationOptions:
  {
  title:"ling,
  headerStyle:styles.homeHeader,
  headerTitleStyle:styles.homeHeaderTitle,
  headerRight:<Button onPress = {({ navigation })=>navigation.navigate('Ques',{name:'Ling'})}>
  }
  }
  Sign：{screen : Sign ,NavigationOptions:{({navigation}=>({
  title:'ling',
  name:`$(navigation.state.params.name)`,
  }))
  
  
  }}
  
)
