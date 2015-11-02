var Counts = {
  count: 0;
}


var FizzBuzz = {
  divisibleBy: function(n, divisor) {
    return (n % divisor === 0);
  },
  run: function(n, userFizz, userBuzz) {
    var result = "";
    if (divisibleBy(n, userFizz)) {
      result += "Fizz";
    }
    if (divisibleBy(n, userBuzz)) {
      result += "Buzz";
    }
    return(result || n);
  }
}
