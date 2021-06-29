
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 kilometer == 5000 meters? ","3) (5 + 3)/2 * 10 = ? ", "4) Given the array[8, Orbit, Trajectory, 45] what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers= ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers= [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question('What your name? ');
 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let i = 0;
  while(questions[i]){
   let answer = input.question(questions[i]);
   candidateAnswers.push(answer);
   console.log(`Your answer: ${candidateAnswers[i]}`);
   console.log(`The answer is: ${correctAnswers[i]}`);
   console.log("---------------------------------------------");
   i++
  }
  return candidateAnswers;
  }

function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 let i = 0;
 let grade = 0;

  while(correctAnswers[i]){
 if(correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()){
   //console.log(`You are correct`);
   grade += 1
   
 } else {
   //console.log(`You are incorrect ${candidateName}`);
    
 }
 
i++
}
 
   if((grade / 5 * 100) === 20 ){
     console.log(`Your score is 20%`);
     console.log(`I'm sorry, ${candidateName} you didn't pass!`);
   } else if ((grade /  5 * 100) === 40){
     console.log(`Your score is 40%`);
     console.log(`I'm sorry, ${candidateName} you didn't pass!`);
   } else if ((grade / 5 * 100) === 60){
     console.log(`Your score is 60%`);
     console.log(`I'm sorry, ${candidateName} you didn't pass!`);
   } else if ((grade / 5 * 100) === 80){
     console.log(`Your score is 80%`);
     console.log(`Congrats, ${candidateName} you passed!`);
   } else if ((grade /5 * 100) === 100){
     console.log(`Your grade score is 100%`);
     console.log(`Congrats, ${candidateName} you passed!`);
   } else {
     console.log(`I'm sorry, ${candidateName} you didn't pass!`);
   }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello, ${candidateName}`);
  console.log("---------------------------------------------");
  askQuestion();
  gradeQuiz();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};