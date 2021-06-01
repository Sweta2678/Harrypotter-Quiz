var readlineSync = require('readline-sync');
var chalk =require('chalk');

var userName = readlineSync.question("What's your Name \t");
 console.log("Welcome " +chalk.underline.green.bgBlue.bold.italic(userName)+ " for " + chalk.black.dim.bgCyanBright("Wizarding World")+ " Quiz");
 console.log(chalk.magenta("-----------------------------------------------"));

var score = 0;
var HighScore = 10;

//play function
function play(question,answers,answer){
  console.log(chalk.black.bgWhite(question));
   var answersObj = [answers.a,answers.b,answers.c];
      for(var k=0;k<answersObj.length;k++){
        console.log(Object.keys(answers)[k] +" : "+ answersObj[k]);
      }
    var que = "Enter your Answer Here: IE>> a \t";
    var userAnswer = readlineSync.question(que);

  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    score = score+1;
    console.log(chalk.green("right"));
  }else{
    console.log(chalk.red("wrong"));
  }

  console.log("Current score is = "+chalk.bold.cyanBright(score));
  console.log(chalk.magenta("------------------------------\n"));
}

questionOne = {
  question: "Harry Potter's Mother Name? ",
  answers: {
      a: "Lily Potter",
      b: "Luna Potter",
      c: "Potter",
    },   
  answer: "a"
}

questionTwo = {
  question: "Harry Potter belongs to which house?",
  answers: {
      a: "Griffindor",
      b: "Hufflepuff",
      c: "Grigngot"
    },
  answer: "a"
}

questionThree = {
  question: "What is the name of Harry Potter's owl?",
  answers: {
      a: "potter",
      b: "Hedwig",
      c: "hanrik"
    },
  answer: "b"
}

questionFour = {
  question: "Which actor played the character Cedric Diggory?",
  answers: {
      a: "harry Potter",
      b: "Robert Clowny",
      c: "Robert Pattinson"
    },
  answer: "c"
}

questionFive = {
  question: "twin brothers?",
  answers: {
      a: "Fred and George",
      b: "Fredrics and Georgian",
      c: "Fred and Georgie"
    },
  answer: "a"
}
questionSix = {
  question: "What is the Name of Ron Weasley's Mother?",
  answers: {
      a: "Mathilda",
      b: "Molly",
      c: "Granger"
    },
  answer: "b"
}
questionSeven = {
  question: "What is the Name of Ron Weasley's pet rat?",
  answers: {
      a: "Scappers",
      b: "Scabbers",
      c: "Scavenger"
    },
  answer: "b"
}
questionEight = {
  question: "What creature is Aragog?",
   answers: {
      a: "Voldemort",
      b: "Hagrid",
      c: "Acromantula"
    },
  answer: "c"
}
questionNine = {
  question: "Who were the one of the founders of Hogwarts?",
   answers: {
      a: "Ravenclawie",
      b: "Helga Hufflepuff",
      c: "Salazar Griffindor"
     
    },
  answer: "b"
}
questionTen = {
  question: "What was the name of Lord Voldemort's loyal snake?",
  answers: {
      a: "Ravena",
      b: "Nagshakti",
      c: "Nagini",
     
    },
  answer: "c"
}

var Questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
for(var i=0;i<Questions.length;i++){

  play(Questions[i].question,Questions[i].answers,Questions[i].answer);
  
}
 if(score < HighScore-1){
    console.log("You did well! Highscore is just "+(HighScore-score)+" points away..Please Try Again");
  }
  if(score==HighScore-1){ 
    console.log("You are one point down to win! Please Try Again");
  }
else if(score==HighScore){
  console.log("Yeahhhhhhhhh "+ userName +"! You won the Game");
}