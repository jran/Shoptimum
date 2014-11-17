<?php
@session_start();
include_once("config.php");

$scarf = $_POST['scarf'];
$top = $_POST['top'];
$bottom = $_POST['bottom'];
$dress = $_POST['dress'];
$shoes = $_POST['shoes'];
$acc = $_POST['acc'];
$id = $_POST['itemNo'];

$stmt = $mysqli->prepare("UPDATE tags SET scarf = ?,top = ?,bottom = ?,dress = ?,shoes = ?,acc = ? WHERE item_no = ?");
$stmt->bind_param('sssssss', $scarf, $top, $bottom, $dress, $shoes, $acc, $id);
$stmt->execute();
$stmt->close();

header("tagLink.html");

?>
