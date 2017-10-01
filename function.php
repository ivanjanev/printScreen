<?php
/**
 * Created by PhpStorm.
 * User: ivanj
 * Date: 22-Mar-17
 * Time: 13:47
 */

if(isset($_POST)&&!empty($_POST))
{
    $timer = $_POST['timer'];
    $picNumber = $_POST['numberId'];
    $targetDir = "screenshots/";
    $im = imagegrabscreen();
    imagejpeg($im,$targetDir."image".$picNumber.".jpeg");
}
?>
