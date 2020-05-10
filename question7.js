function findLarge(){
 var num1=document.getElementById("number1").value;
 var num2=document.getElementById("number2").value;

// if(num1>num2){

// alert("The Largest is"+num1);}

// else if(num2>num1){
//     alert("The Largest is"+num2); 

// }
// else if(num1==num2){
//    alert("Both Numbers are equal");

// }
var input1 = parseInt(num1,10);
var input2 = parseInt(num2,10);
if (input1 == input2) {
    alert(input1 + " is equal to " + input2);
} else if (input1 > input2) {
    alert(input1 + " is larger than " + input2);
} else {
    alert(input1 + " is lesser than " + input2);
}


}