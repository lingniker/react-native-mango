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
     
