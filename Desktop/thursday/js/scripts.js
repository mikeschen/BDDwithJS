
var maxNumbers = [];
var count;
var countUp = function(countUptoNumber, incrementNumber) {
  for (count = incrementNumber; count <= countUptoNumber; count += incrementNumber) {
    maxNumbers.push(count);
  }
  return maxNumbers;

}
countUp(countUptoNumber, incrementNumber);
