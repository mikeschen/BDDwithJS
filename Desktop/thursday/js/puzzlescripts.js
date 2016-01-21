var vowels = ['a', 'e', 'i', 'o', 'u'];
var word = "";

var puzzleMaker = function(word) {
    var wordArray = word.split("");
    for(i=0; i < wordArray.length; i++) {
      for(j=0; j < vowels.length; j++){
        if (wordArray[i] === vowels[j]) {
          wordArray[i] = "-";
        }
      }
    }
  console.log(wordArray);
}
puzzleMaker("hackers must die");
