function result(){
    var array1=document.querySelector('#inputid').value.split(',');
    var array2=array1.map(function (el){ return  parseInt(el);   } );
    var para =document.getElementById("para").value;

   // alert(array2[1]);
   var mf = 1;
var m = 0;
var item;
for (var i=0; i<array2.length; i++)
{
        for (var j=i; j<array2.length; j++)
        {
                if (array2[i] == array2[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = array2[i];
                }
        }
        m=0;
}
//alert(item+" ( " +mf +" times ) ") ;
document.getElementById("para").innerHTML=item+" ( " +mf +" times ) ";

    
            }