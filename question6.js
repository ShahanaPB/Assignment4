function result(){
var n=document.getElementById("n").value;
var string=document.getElementById("text").value;
var para =document.getElementById("para").value;

var myTruncatedString = string.substring(0,n);
//console.log(myTruncatedString);
document.getElementById("para").innerHTML=myTruncatedString;

}