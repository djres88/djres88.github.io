var FizzBuzz = {
  divisibleBy: function(n, divisor) {
    return (n % divisor === 0);
  },
  run: function(n, userFizz, userBuzz) {
    var result = "";
    if (this.divisibleBy(n, userFizz)) {
      result += "Fizz";
    } if (this.divisibleBy(n, userBuzz)) {
      result += "Buzz";
    };
    return(result || n);
  }
}
