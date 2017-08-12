#  ques文件是在开发过程中的一些问题记录
###  遇到的问题有
1. 在数组遍历中 关于节点key 必须是唯一的
2. 数组的添加 push 的用法就是改变原来的数组，在使用 setState 属性前，
先将数组进行 push 

```js
  this.state.arr.push("hhh1");
  this.setState({arr:this.state.arr})
```           
 
### 移除数组里的某个特定的元素
将 arr 传进去判断索引的位置，最后使用splice进行切割，（splice的方法就是切割）

```js
onPress={()=>{
for(var i=0;i<this.state.arr.length;i++)
{
   if(this.state.arr[i]===arr)
  {
   this.state.arr.splice(i,1);
   break;
   }
 }
this.setState({arr:this.state.arr})
}}
```

### 父组件拿到子组件的状态，通过父组件的回调函数 可以拿到子组件的状态。

#### 在父组件上注册一个事件，通过子组件的调用，将数据返回给父组件

#### 将父组件的状态传递给子组件arr=this.state.arr   子组件使用this.props.arr

#### 这样就可以使得父组件与子组件进行数据的交互了

```js
  class Parents extends Component{
    constructor(props){
    super(props);
    this.state={arr:[]};
    }
    
    changeArr(arr){
    this.setState({arr:arr});
    }
    
    render(){
    return(<Child changeArr={this.changArr.bind(this)}  arr=this.state.arr />)
    }
  }
  
  
  class Child extends Component{
    constructor(prors){
    super(prors);
    this.state={att:this.state.arr}
    }
    handlerPress(){
    this.state.arr.push("123456");
    this.setState({arr:this.state.arr});
    this.props.changeArr(this.state.arr);
    }
     render(){
     return(
     <View onPress={this.handlerPress.bind(this)}></View>
     )
     
     }
  }
  
  ```
