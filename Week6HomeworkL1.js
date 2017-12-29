function IsOdd()
{
  var var1 = 9;
  var var2 = 8;
  var var3 = 4;
  var var4 = 15;
  var var5 = 11;
  var var6 = 3;
  var var7 = 5;
  var var8 = 17;
  var var9 = 21;
  var var10 = 100;
  //That was the array.
  var oddNumbers = "";
  var numbers = [var1, var2, var3, var4, var5, var6, var7, var8, var9, var10];

  //alert("I'm working 6"); 
  document.getElementById('result').innerHTML = numbers;

  var nLen = numbers.length;
  //that means that the variable nLen is equal to however many elements are in the array "numbers".
  for (var i = 0; i < nLen; i++) {
     if (numbers[i]%2 != 0) {
      oddNumbers += numbers[i] + ", ";
    }
  }
  //That was looping through the array and printing the odd numbers.
  //alert("OddNumbers is " + oddNumbers);
  document.getElementById('result2').innerHTML =  "The odd numbers in this array are: " + oddNumbers
}


function IsEven()
{
  var var1 = 5;
  var var2 = 8;
  var var3 = 3;
  var var4 = 4;
  var var5 = 8;
  var var6 = 19;
  var var7 = 22;
  var var8 = 6;
  var var9 = 9;
  var var10 = 12;
  //That was the array.
  var evenNumbers = "";
  var numbers = [var1, var2, var3, var4, var5, var6, var7, var8, var9, var10];

  //alert("I'm working 6"); 
  document.getElementById('result3').innerHTML = numbers;

  var nLen = numbers.length;
  //that means that the variable nLen is equal to however many elements are in the array "numbers".
  for (var i = 0; i < nLen; i++) {
     if (numbers[i]%2 == 0) {
      evenNumbers += numbers[i] + ", ";
    }
  }
  //That was looping through the array and printing the even numbers.
//alert("evenNumbers is " + evenNumbers);
   document.getElementById('result4').innerHTML =  "The even numbers in this array are: " + evenNumbers
}
