console.log("entered script.js");
$(document).ready(function() {
	console.log("document ready");
	$('#form').submit(function() {
console.log("clicked submit");
var subtotal = document.getElementById("subtotal").value;
var tipPercentage = $('input[name="tipPercentage"]:checked').val();
var customTip = '0';
if(tipPercentage == 'custom'){
	customTip = document.getElementById("customTip").value;
}
var split = document.getElementById("splitNumber").value;
console.log(split);
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'subtotal=' + subtotal + '&tipPercentage=' + tipPercentage + '&customTip=' + customTip + '&split=' + split;
console.log(dataString);
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "process.php",
data: dataString,
cache: false,
success: function(html) {
if(html == "0"){
document.getElementById("subtotal").value = html;
document.getElementById("subLabel").style.color = "red";
document.getElementById("display").innerHTML = 'Enter valid subtotal';
}else if(html == "1"){
document.getElementById("customArea").style.color = "red";
document.getElementById("display").innerHTML = 'Enter valid tip percentage';
}else if(html == "2"){
document.getElementById("splitArea").style.color = "red";
document.getElementById("display").innerHTML = 'Enter valid number of persons to split among';
}
else{
document.getElementById("subLabel").style.color = "black";
document.getElementById("customArea").style.color = "black";
document.getElementById("splitArea").style.color = "black";
document.getElementById("display").innerHTML = html;
}
}
});
return false;
});
});
