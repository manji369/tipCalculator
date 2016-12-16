console.log("entered script.js");
$(document).ready(function() {
	console.log("document ready");
	$('#form').submit(function() {
console.log("clicked submit");
var subtotal = document.getElementById("subtotal").value;
var tipPercentage = $('input[name="tipPercentage"]:checked').val();
console.log(tipPercentage);
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'subtotal=' + subtotal + '&tipPercentage=' + tipPercentage;
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "process.php",
data: dataString,
cache: false,
success: function(html) {
if(html == "0"){
document.getElementById("subtotal").value = html;
document.getElementById("display").innerHTML = 'Enter valid subtotal';
}else{
document.getElementById("display").innerHTML = html;
}
}
});
return false;
});
});