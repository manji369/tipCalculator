<?php
$subtotal = floatval($_POST["subtotal"]);
$tipPercentage = floatval($_POST["tipPercentage"])/100;
if ($subtotal < 0){
$subtotal = 0;
}
$tip = $subtotal * $tipPercentage;
$total = $subtotal + $tip;
if($subtotal > 0){
echo "Tip: $".$tip."<br>";
echo "<br>";
echo "Total: $".$total;
//echo "tipPercentage: ".$tipPercentage;
}else{
echo "0";
}
?>
