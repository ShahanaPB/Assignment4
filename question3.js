function result(){
    var string=document.getElementById("string").value;
    var para =document.getElementById("para").value;

    function switchCase(string){
        // check if original char is equal to the upper case version
        // if so, make lower case, otherwise, make uppercase
        var swapped = [];
        for(var i = 0; i < string.length; i++){
            if(string != " "){
                //console.log(string[i]);
                //console.log(string[i].toUpperCase());
                if(string[i] == string[i].toUpperCase()){
                    //console.log(string[i].toLowerCase());
                    swapped.push(string[i].toLowerCase());
                    //console.log(string[i]);
                }
                else{
                    swapped.push(string[i].toUpperCase());
                    //console.log(string[i]);
                }
            }
        }
        return swapped.join("");
    }
    
// console.log(switchCase(string));
    document.getElementById("para").innerHTML=switchCase(string);

    
}