
function getStats()
{
   var numbers = [];
   //alert("inside function");
   
   var len = document.getElementById("elementCount").value;
   //alert("value of input item is " + len);
   for (var i = 0; i < len; i++) {
    numbers.push( Math.floor(Math.random() * 100));
   }
   
   //var len = numbers.length;

   var avg = 0;
   var sum = 0;
   var modeList = "";
   var median = 0;
   var allNumbers = "";

   // sort the elements in the array (do a numeric sort)
   numbers.sort(function(a,b){ return (a-b);});
   
   //alert("after sorting");
   for (var i=0; i<len; i++){
      allNumbers += numbers[i] + ", ";
      sum += numbers[i];
      //alert( numbers[i]);
   }
   avg = sum / len;
   
   if (len%2 == 0) {
    var num1 = numbers[(len/2)-1];
    var num2 = numbers[(len/2)];    
    median = (num1 + num2) / 2;
   }
   else {
      median = numbers[Math.floor(len/2)];
   }
   

   /*********** Begin calculation of mode ***********************/
   var  occurences    = [];
   var  highestFrequency = 0;
   for (var i=0; i < len; i++) {
      if ( occurences[  numbers[i] ] === undefined ) {
         // does not exist yet
         // that means it is the first occurence of the value contained in numbers[i]
         occurences [numbers[i]] = 1;
      }
      else {
        // this value was already found in the occurences array
        // so just add 1 to its value indicating that it is occuring one more time
        occurences[ numbers[i]] += 1;
      }

      if ( occurences[numbers[i]] > highestFrequency) {
         highestFrequency = occurences[numbers[i]];
      }
   }
   /** Begin Debug **/
   /*for (var position in occurences) {
      alert( "the number [" + position + " occurs [" + occurences[position] + " many times");
   }*/
   /** End Debug **/

   // now we know what the highest frequency for our numbers array is
   // find the value(s) with that frequency
   for (var position in occurences){
      if (occurences[position] == highestFrequency) {
         modeList += ", " + position;
      }
   }
   modeList = modeList.slice(2); // Ignore the first two chars, start from the third character
   /************ End calculation of mode **********************/

   document.getElementById('allNumbers').innerHTML =  "The numbers in the array are: " + allNumbers;
   document.getElementById('sum').innerHTML =  "Sum is " + sum;
   document.getElementById('avg').innerHTML =  "Average is " + avg;
   document.getElementById('mode').innerHTML =  "Mode is " + modeList;
   document.getElementById('median').innerHTML =  "Median is " + median; 
}