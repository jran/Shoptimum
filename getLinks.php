<?php
@session_start();
include_once("config.php");

$scarf = $_POST['des_scarf'];
$top = $_POST['des_top'];
$bottom = $_POST['des_bottom'];
$dress = $_POST['des_dress'];
$shoes = $_POST['des_shoes'];
$acc = $_POST['des_acc'];
$id = $_POST['itemNo'];

$scarfArr = array();
$topArr = array();
$bottomArr = array();
$dressArr = array();
$shoesArr = array();
$accArr = array();

$count_init = 0;

$stmt = $mysqli->prepare("SELECT itemNo, scarf, top, bottom, dress, shoes, acc, count FROM tags WHERE itemNo = ?");
$stmt->bind_param('s', $id);
$stmt->execute();
$stmt->bind_result($getId,$scarf,$top,$bottom,$dress,$shoes,$acc,$count);
$i = 0;
while($stmt->fetch()){
	$scarfArr[$i] = $scarf;
	$topArr[$i] = $top;
	$bottomArr[$i] = $bottom;
	$dressArr[$i] = $dress;
	$shoesArr[$i] = $shoes;
	$accArr[$i] = $acc;

	$i = $i + 1;
}
$stmt->close();

header("tagLink.html");

?>
