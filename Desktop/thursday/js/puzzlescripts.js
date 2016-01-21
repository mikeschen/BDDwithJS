var puzzleMaker = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var wordArray = word.split("");
    for(i=0; i < wordArray.length; i++) {
      for(j=0; j < vowels.length; j++){
        if (wordArray[i] === vowels[j]) {
          wordArray[i] = "-";
        }
      }
    }
  return wordArray;
};

$(document).ready(function() {
  $("form#WordPuzzle").submit(function(event) {
    var puzzlePhrase = $("input#puzzle").val();
    var results = puzzleMaker(puzzlePhrase);
    $("#puzzleResult").empty().append(results.join(""));
    $("#result").show();
    event.preventDefault();
  });
  $("form#Reset").submit(function(event) {
    $("#numberName")[0].reset();
    event.preventDefault();
  });
});
