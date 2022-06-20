//获取元素
var box = document.querySelectorAll('.new-box');
console.log(box);
var list = document.querySelectorAll('.circle>li');
console.log(list);


function fun(index){
    // 拿到数组所有下标
    for(var i = 0; i < box.length; i++){
        // console.log(i);
        // 下标和index相等
        if(index === i){
            // 对应的div显示
            box[i].style.display = 'block';
            // 对应的li背景颜色变黄
            list[i].className = 'active-circle';
        }else{
            //其他div隐藏
            box[i].style.display = 'none';
            // 其他li背景颜色去掉
            list[i].className = '';
        }
    }
}