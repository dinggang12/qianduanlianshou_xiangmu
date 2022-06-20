// 获取图片
var img = document.getElementById('img');
//获取li
var li = document.querySelectorAll('.btn li');
//存储图片
var imgArr = ['banner1.png','banner2.jpg','banner3.jpg','banner4.jpg','banner5.jpg'];
function banner(index){
    // 拿到数组所有的下标
    for(var i = 0; i < imgArr.length; i++){
        //判断index  和  i
        if(index === i){
            // 对应的图片显示
            img.src = 'images/' + imgArr[i];
            //对应的li背景颜色变白
            li[i].className = 'active';
        }else{
            // 其他li  白色背景去掉
            li[i].className = '';
        }
    }
}