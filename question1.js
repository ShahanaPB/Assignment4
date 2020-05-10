function result(){
    var array1=document.querySelector('#inputid').value.split(',');
    var array2=array1.map(function (el){ return  parseInt(el);   } );
    var para =document.getElementById("para").value;
       var i,flag=0,number;
       number = array2[0];

       for(i=2; i <= number/2; i++)
       {
          if(number%i == 0)
          {
             flag = 1;
             break;
          }
       }
       if(flag == 0)
       {
          //window.alert(number+"-The inputed number is Prime");
          document.getElementById("para").innerHTML=number+" is Prime";

       }
       else
       {
         //  window.alert(number+"-The inputted number is not Prime");
         document.getElementById("para").innerHTML=number+" is not Prime";
       }
    

    
            }


            
      
          
        