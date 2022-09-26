var readlineSync = require("readline-sync");

var score = 0;

// Welcome function
function welcome() {
 var userName = readlineSync.question("What's your name? \n");

  console.log("Welcome "+ userName + "\n" );
  console.log("Rishabh is your friend, let's check how much do you know about him...\n" );
}

// array of keyboards and their object
var questions = [{
  question: "Where does he lives? \na.Mumbai \nb.Delhi \nc.Bangalore",
  answer: "Mumbai"
}, {
  question: "His favorite actor? \na.Shahrukh \nb.Tom Cruise \nc.Brat Pitt ",
  answer: "Shahrukh"
},
{
  question: "Where does he work? \na.Ubisoft \nb.Netflix \nc.Google",
  answer: "Ubisoft"
},
{
  question: "What is his favourate 'AAA' pc game? \na.GTA \nb.WWII \nc.Witcher",
  answer : " GTA"
},
{
  question: "Which is his favourate series? \na.Vikings \nb.Mirzapur \nc.Witcher",
  answer: "Vikings"
}];

// play function processing
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
  if (score > 3){
    console.log("Impressive, You know him very well");
   
  } else if (score > 1){
    console.log("OK! you know quite something about him");
  } else {
    console.log("Sorry to say but, you don't know him")
  }
}

welcome();
game();
showScores();
