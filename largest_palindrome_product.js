/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here

  var stringArray = [];
  var reverseStringArray = [];
  var topString = '10';

  function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
  }


  for (var k = 1; k < digits; k++) {
    topString += '0';
  }
console.log('topstring', topString);
  var top = parseInt(topString);
console.log('top', top);



  for (var i = top; i < (top*10) ; i++) {
    for (var j = top; j< (top*10) ; j++) {
      var product = i * j;



      var productString = product.toString();
      stringArray[0] = productString.charAt[0];
      stringArray[1] = productString.charAt[1];
      stringArray[2] = productString.charAt[2];
      reverseStringArray = stringArray.reverse();
      if (stringArray[0]===reverseStringArray[0] && stringArray[1]===reverseStringArray[1] && stringArray[3]===reverseStringArray[3]) {

        if (isPrime(product) === false) {

          factor_0 = i;
          factor_1 = j;
          palindromeNumber = product;



          console.log('f1',factor_0);
          console.log('f2', factor_1);
          console.log('result', palindromeNumber);

        } else {}



      }

    }
  }



  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};