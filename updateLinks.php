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

$count_init = 0;

$stmt = $mysqli->prepare("INSERT INTO links (itemNo, scarf, top, bottom, dress, shoes, acc, count) VALUES (?,?,?,?,?,?,?,?)");
$stmt->bind_param('sssssssd', $id, $scarf, $top, $bottom, $dress, $shoes, $acc, $count_init);
$stmt->execute();
$stmt->close();

header("tagLink.html");

?>
