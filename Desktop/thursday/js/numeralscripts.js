var numeralMaker = function(number) {
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I"];
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = "";
  for (var i = 0; i<roman.length; i++) {
    while (number >= decimals[i]) {
      number -= decimals[i];
      romanNumeral += roman[i];
    }
  }
  return romanNumeral;
};

$(document).ready(function() {
  $("form#numTranslator").submit(function(event) {
    var numPhrase = $("input#numInput").val();
    var results = numeralMaker(numPhrase);
    $("#numResult").empty().append(results);
    $("#result").show();
    event.preventDefault();
  });
  $("form#Reset").submit(function(event) {
    $("numberName")[0].reset();
    event.preventDefault();
  });
});
