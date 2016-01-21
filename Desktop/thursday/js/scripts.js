var maxNumbers = [];
var countUp = function(countUptoNumber, incrementNumber) {
  var count;
  for (count = incrementNumber; count <= countUptoNumber; count += incrementNumber) {
    maxNumbers.push(count);
  }
  return maxNumbers;
}
var maxNumbers = [];
$(document).ready(function() {
  $("form#Numbers").submit(function(event) {
    var userCount = parseInt($("input#CountUp").val());
    var userIncrement = parseInt($("input#IncrementUp").val());
    countUp(userCount, userIncrement);
    $("#numberName").empty().append(maxNumbers.join(" , "));
    $("#result").show();

    event.preventDefault();
  })

  $("form#Reset").submit(function(event) {
    $("#numberName")[0].reset();
    event.preventDefault();
  })
});
