$(function(){
    //1.获取热门城市
    $.ajax({
        type:'get',
        url:'php/getCity.php',
        dataType:'json',
        success:function(res){
            console.log(res.result.hotcity); 
            var arr=res.result.hotcity;
            var str='';
            for(var i=0;i<arr.length;i++){
                str+=`<option value="${arr[i].code}">${arr[i].name}</option>`;
            }  
            // console.log(str);       
            //添加热门城市
            $("#hotCity").html(str); 
            // 获取了热门城市后---才有二级 和三级 
            getArea($("#hotCity").val());
            //店铺
            getShop($("#hotCity").val(),'',1);

        },
        error:function(err){
            console.log('请求失败');
            
        }
    })


    //2.获取城市的区域----注意：城市的区域受城市的影响，城市修改的时候 区域需要重新请求 
    //获取区域封装一个函数   函数接受外部的参数---参数：热门城市
    // getArea('shang_hai');
    function getArea(code){
        //先清空区域的内容 --再追加对应的区域
        //--请选择---保留 他后面的数据 清空 
        $("#cityArea option:gt(0)").remove();

        $.ajax({
            type:'get',
            url:'http://bang.360.cn/aj/get_area/?citycode='+code,
            dataType:'jsonp',
            success:function(res){
                console.log(res.result);
                //获取区域数据--注意：res.result是对象  遍历对象 for-in  获取数据
                var str='';
                for(var key in res.result){
                    str+=` <option value="${key}">${res.result[key]}</option>`;
                }
                //for循环结束后 str里面获取区域 
                //追加数据
                $("#cityArea").append(str);

            },
            error:function(){
                console.log('请求错误');
                
            }
        })
    }

    //3.店铺信息
    //获取三级店铺信息  参数：热门城市  区域  页码 
    //封装函数 接受参数变量 受前面的选择的时候，修改三级 
    // getShop('bei_jing','',1);
    function getShop(cityId,areaId,pn){
        $.ajax({
            type:'get',
            url:'php/getShop.php',
            dataType:'json',
            data:{
                cityId:cityId,
                areaId:areaId,
                pn:pn
            },
            success:function(res){
                // console.log(res);
                var shop_data=res.shop_data;
                console.log('店铺信息：',shop_data);
                var str='';
                for(var i=0;i<shop_data.length;i++){
                    str+=`<option value="">${shop_data[i].shop_name}</option>`;
                }
                $("#shop").html(str);
                
            }
        })
    }


    //4.一级修改下拉选择后 选择不同的热门城市 对应的城市区域和店铺信息 对应更改
    $("#hotCity").change(function(){
        //获取当前选择的热门城市
        // console.log($(this).val());
        //二级动态修改---重新请求---请求当前的城市区域
        getArea($(this).val());
        //三级修改
        getShop($(this).val(),'',1)
    })

    //5.二级修改的时候 只是切换区域：对应的修改三级区域的店铺信息   一级不会修改：只是修改区域 不会影响城市
    $("#cityArea").change(function(){
        console.log($(this).val());
        //三级店铺
        getShop($("#hotCity").val(),$(this).val(),1);
    })
    




})