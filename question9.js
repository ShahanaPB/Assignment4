function output(){
 

       
        var arr=['J','a','v','a','s','c','r','i','p','t'];
        
        document.getElementById("result").innerHTML = '';
       
        for (var i = 0; i <=arr.length; i++) {
            var result = "";
            for (var j = 0; j <i; j++) {
                result +=arr[j];
            }
            document.getElementById("result").insertAdjacentHTML('beforeend', result+'<br>');
        }
           
        }