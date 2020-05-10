function result(){
    var array1=document.querySelector('#inputid').value.split(',');
    var array2=array1.map(function (el){ return  parseInt(el);   } );

var i;
for(i=0;i<array2.length;i++)
{
    var num = array2[i];
    
    if(num % 2 == 0) {
      /// console.log('Number is Even!');
document.write("The Number is Even </br>");
    } else {
      // console.log('Number is Odd!');
     document.write("The Number is Odd </br>");

    }

}
}