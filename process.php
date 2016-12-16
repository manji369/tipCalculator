<?php
$subtotal = floatval($_POST["subtotal"]);
$split = (int)$_POST["split"];
if ($_POST["tipPercentage"] != "custom"){
$tipPercentage = floatval($_POST["tipPercentage"])/100;
}else{
$tipPercentage = floatval($_POST["customTip"])/100;
}
if ($subtotal < 0){
$subtotal = 0;
}
$tip = $subtotal * $tipPercentage;
$total = $subtotal + $tip;
//echo "tipPercentage: ".$tipPercentage."<br>";
//echo "split: ".$split."<br>";
//echo "splitAct: ".$_POST["split"]."<br>";
if($subtotal > 0 && $tipPercentage > 0 && $split > 0){
echo "Tip: $".$tip."<br>";
echo "Total: $".$total."<br>";
if($split > 1){
echo "Tip each: $".$tip/$split."<br>";
echo "Total each: $".$total/$split."<br>";
}
//echo "tipPercentage: ".$tipPercentage;
}elseif ($subtotal <= 0){
echo "0";
}
elseif ($tipPercentage <= 0) {
echo "1";
}
elseif ($split <= 0){
echo "2";
}
?>
