var readlineSync = require("readline-sync");
const chalk = require("chalk"); 
var score= 0;
var HighScore = 6;
const log = console.log;

log(chalk.yellow("BIG BANG THEORY QUIZ\n "));
var userAnswer = readlineSync.question(chalk.bgWhite.black("To Play Please Type Your Name \n  "));

log(('Welcome'+ "  " +chalk.underline.yellow(userAnswer) + '!'))


var questionList = [{
  question: "Sheldon has cynophobia, a fear of what?\n a) Dogs \n b) Cat\n c) Mouse \n d) Donkey\n",
  answer: 'a' 
},
{
  question: `Who said: "I don't care if no one else gets it, I'm going as the Doppler Effect"?\n a) Leonard \n b) Raj\n c) Sheldon \n d) Penny\n`,
  answer: 'c'
},
{
  question: "What does Siri refer to Raj as?	\n a) Hot \n b) Bold\n c) Lazzy \n d) Sexy\n",
  answer: 'd'
}
, {
  question: "At what age did Sheldon obtain his first PhD?	\n a) 13 \n b) 14\n c) 16 \n d) 20\n",
  answer: 'c'

}
,{
  question: "Which character is portrayed by the actor Kunal Nayyar?	?\n a) Leonard \n b) Raj\n c) Sheldon \n d) Stephanie\n",
  answer: 'b'
}
,{
  question: "What is Amy's apartment number? \n a)214 b) 314 c)414 d)114 \n",
  answer:"b"
}]


function quiz(arrayOfQuestions){
for(let i=0; i<arrayOfQuestions.length; i++){
  var currentQuestion = arrayOfQuestions[i];
  var currentAnswer = arrayOfQuestions[i].answer;
  var userAnswers =readlineSync.question(chalk.green(currentQuestion.question));
 
if(userAnswers.toLowerCase() === currentAnswer.toLowerCase() ){
 score++;
  log(chalk.blue.bold('You are Right '));

 log(chalk.yellow('Score is: ' + score));
}else{
  score--;
  log(chalk.blue.bold('Correct Answer is: ' + currentAnswer));
 log(chalk.yellow('Score is: ' + score));

}
}
}

quiz(questionList);
  log(chalk.red.bold("You Scored: ")+ chalk.bgGreen.black(score ));
if(score > HighScore){
  HighScore = score;
}
  log(chalk.red.bold("High Score is: ")+ chalk.bgGreen.black(HighScore ));

 


