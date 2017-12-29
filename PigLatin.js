
function translatePL()

{
    var userinput = document.getElementById("Input").value;
    var limit = userinput.length;
    var i = 0;
    var result = "";
    
    
        if (userinput.charAt(0) == 'a' || 
            userinput.charAt(0) == 'e'  || 
            userinput.charAt(0) == 'i'  || 
            userinput.charAt(0) == 'o' || 
            userinput.charAt(0) == 'u')        
        { 
          result = userinput + "way";

        }
        else 
        {
          result = userinput.substring(1);
          result += userinput.charAt(i)
          result += "ay" 
        }
    
    var explanation = userinput + " in Pig Latin is " + result
    document.getElementById("explanation").innerHTML = explanation;
}        