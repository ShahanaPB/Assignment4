function result(){
    var array1=document.querySelector('#inputid').value.split(',');
    var array2=array1.map(function (el){ return  parseInt(el);   } );
    var para =document.getElementById("para").value;

    var sum = 0, 
    i = array2.length;
while (i--) 
 sum += Math.pow(array2[i], 2);
//alert("The sum is "+ sum);
document.getElementById("para").innerHTML="The sum is "+ sum;




}



