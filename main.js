// RUN WITH JQUERY 3.4.1

var letters = [];
var output;
$("#pigLatin").click(pigLatinTranslator);
$("#anagram").click(anagramTester);
$("#palindrome").click(palindromeChecker);

function palindromeChecker() {
  $("body").empty();
  $("body").append("<p>What would you like to check?</p>");
  $("body").append("<input></input>");
  $("input").change(palindrome2);
}

function palindrome2() {
  input = event.target.value;
  input = input.replace(" ", "");
  var letters = [];
  for (var i = input.length - 1; i > -1; i--) {
    letters.push(input[i]);
  }
  var result = letters.join("");
  if (result == input) {
    $("body").append("<p>This is a palindrome!</p>");
  } else {
    $("body").append("<p>This is not a palindrome!</p>");
  }
}

function anagramTester() {
  $("body").empty();
  $("body").append("<p>Please give two words to test.</p>");
  $("body").append("<input id = 'input1'></input>");
  $("body").append("<input id = 'input2'></input>");
  $("body").append("<button>Let's go!</button>");
  $("button").click(anagram2);
  $("body").append("<div id = 'anagramResults'></div>");
}

function anagram2() {
  $("#angramResults").empty();
  var input1 = $("#input1").val();
  var input2 = $("#input2").val();
  var letters = [];
  if (input1.length == input2.length) {
    for (var i = 0; i < input1.length; i++) {
      letters.push(input1[i]);
    }
    for (var i = 0; i < input2.length; i++) {
      for (var j = 0; j < letters.length; j++) {
        if (letters[j] == input2[i]) {
          letters.splice(j, 1);
          break;
        }
      }
    }
    if (letters.length > 0) {
      $("#anagramResults").append("<p>These are not anagrams!</p>");
    } else {
      $("#anagramResults").append("<p>These are anagrams!</p>");
    }
  } else {
    $("#anagramResults").append("<p>These are not anagrams!</p>");
  }
}

function pigLatinTranslator() {
  $("body").empty();
  $("body").append("<p>What would you like to translate?</p>");
  $("body").append("<input></input>");
  $("input").change(splitWord);
}

function pigLatin2(word) {
var first = "";
  first = word[0];
  if (!(first == "a" || first == "e" || first == "i" || first == "o" || first == "u")) {
    word.push(word[0]);
    word.shift();
  }
  word.push("a");
  word.push("y");
  var string = "";
  for (var i = 0; i < word.length; i++) {
    string = string + word[i];
  }
  return string;
}

function splitWord() {
  var output = "";
  var word = [];
  var input;
  input = event.target.value;
  for (var i = 0; i < input.length; i++) {
    letters.push(input[i]);
  }
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] != " ") {
      word.push(letters[i]);
    } else {
      output = output + pigLatin2(word) + " ";
      word = [];
    }
  }
  output = output + pigLatin2(word) + " ";
  console.log(output);
}
