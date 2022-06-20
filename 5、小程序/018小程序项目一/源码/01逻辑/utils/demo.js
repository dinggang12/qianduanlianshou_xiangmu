function demo(){
  console.log('公共的js文件--模块');
}
var obj={
  uname:'lilei',
  age:20
}

//想被外部使用js文件模块，必须暴露出接口 
//方法1：直接暴露出内容变量
// module.exports=demo;
//方法2：暴露给变量 ={demo:demo}
// module.exports.aa=demo;
// module.exports.obj=obj;

//方法3：
module.exports={
  aa:demo,
  obj:obj
}