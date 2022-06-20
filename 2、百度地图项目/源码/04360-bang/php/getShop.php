<?php

    $city=$_GET['cityId'];
    $area=$_GET['areaId'];
    $num=$_GET['pn'];
    $con=file_get_contents("http://bang.360.cn/at/shop?&quan_id=&service_id=&type_id=&online=off&cuxiao=off&is_bzj=0&tag=&pagesize=5&lng=&lat=&city_id=$city&area_id=$area&pn=$num");
    echo $con;

?>