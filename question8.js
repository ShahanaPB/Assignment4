function result(){
    var array1=document.querySelector('#inputid').value.split(',');
    var para =document.getElementById("para").value;

 array1.sort();
 var i;
 for(i=0;i<array1.length;i++)
 {
    // console.log(array1[i])
document.write(array1[i]);
document.write(' , ');
 }


}