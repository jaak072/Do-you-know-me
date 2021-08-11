var readlineSync = require("readline-sync");

var score = 0;

// Questions
var questions = [
{
  question: "where is Jawed from? ",
  answer: "Nokha"
}, 
{
  question: "Jawed's favorite superhero would be? ",
  answer: "RDJ"
},
{
  question: "Would Jawed like to have...? \n(Iron man's Suit or Batman's car)",
  answer: "Iron man's Suit"
},
{
  question: "What is the jawed favorite color? \n(Blue, Black, Pink, Red, Yellow, Green, White, Purple, Orange or Something else) ",
  answer: "Red"
},
{
  question: "What does jawed prefer? \n(Tea, Coffee, Juice, Milk, Alcohal, Water) ",
  answer: "Tea"
},
{
  question: "What type of Weather does Jawed prefer? \n(Winter, Summer, Rainy, Autumn) ",
  answer: "Winter"
},
{
  question: "When is jawed Birthday Month? ",
  answer: "April"
},
{
  question: "How does Jawed like to travel in his day to day life? \n(Cycle, Car, plane, Train, Bike or Bus) ",
  answer: "Bike"
},
{
  question: "What type of games does Jawed like? \n(Indoor Games, Outdoor Games, Mobile Games or Video Games) ",
  answer: "Indoor Games"
},
{
  question: "Does Jawed like veg or non-veg? ",
  answer: "Non-veg"
}
];

// Welcome function
function welcome() {
  var userName = readlineSync.question("How may I address you? \n(Name Please) : ");
  console.log("\n");
  console.log("Welcome "+ userName + " to 'DO YOU KNOW Quiz'");
 
}

// quiz play function
function play(question, answer) {
  var userAnswer = readlineSync.question("\nQuestion:- " + question + "\nAnswer:- ");

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("You are right!");
    score = score + 1;
    
  } else {
    console.log("ohho!");
    console.log("Right answer is : " + answer);
   
  }

  console.log("\n");
  console.log("-------------------------")
}

// quiz processing
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// Totel score
function showScores() {
  console.log("YAY! You SCORED: ", score +" out of 10");

  if(score > 8){
    console.log("\n");
    console.log("Yah That's my Boy/girl. ")
    console.log("you should be there ping me and I'll update it")
  }
  else if((score <= 8) && (score > 5)){
    console.log("\n");
    console.log("Average knowledge about me")
  }
  else if((score <= 5) && (score > 3)){
    console.log("\n");
    console.log(" Very Few knowledge about me")
  }
  else{
    console.log("\n");
    console.log("You Don't know better me!, So Sad")
  }
  console.log("\n");
  console.log("Who Knows Jawed Best :-");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

// data of high score
var highScores = [
  {
    name: "Jawed",
    score: 10,
  },

  {
    name: "upYadav",
    score: 8,
  },
]

welcome();
var wantbeORnot = readlineSync.question("DO YOU KNOW JAWED? \n(Yes Or No) : ");
if((wantbeORnot === "yes") || (wantbeORnot === "y")){
  game();
  showScores();
}
else{
  console.log("Thank you for giving your Time.")
}


