function calc() {
  var digit = +document.getElementById("digit").value;
  parseInt(digit, [10]);


  if (isNaN(digit) || digit === 0) {
    alert('Please fill quantity with non zero integer');
  }
  var Pi = 0;
  var n = 1;
  for (i = 0; i <= digit; i++) {
    Pi = Pi + (4 / n) - (4 / (n + 2))
    n = n + 4
  }
  var result = String(Pi);
  var finalResult =result.substring(0,digit);
  
  
  document.getElementById("output").innerHTML = "<h4> Pi:  " + finalResult + "</h4>";
  
  var newString = finalResult.substr(2);
 
  document.getElementById("output1").innerHTML = "<h4> Pi Decimal Length:  " + newString.length+ "</h4>";
}


function resetDigit() {
  digit.value = '';
  document.getElementById("output").innerHTML = '';
  document.getElementById("output1").innerHTML = '';
}


//Github:
$ cat .gitattributes
  *.rb linguist-language=JavaScript
