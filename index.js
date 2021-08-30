const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let score = 0;
const questions = [
  {
    question: "Where do I live? ",
    answer: "Bhilai",
  },
  {
    question: "My favorite superhero would be? ",
    answer: "Batman",
  },
  {
    question: "Where do I study? ",
    answer: "Pune",
  },
  {
    question: "What is my favourite street food? ",
    answer: "Momo",
  },
  {
    question: "Am I veg or non-veg? ",
    answer: "non-veg",
  },
];

let highScores = [
  {
    name: "Anurag",
    score: 5,
  },

  {
    name: "Rishi",
    score: 4,
  },
];

function checkString() {
  let name = prompt("Enter your name: ");
  if (parseInt(name) || name === "") {
    console.log("Please enter valid detail");
    console.log("................");
    checkString();
  } else {
    quest(name);
  }
}

function quest(text) {
  console.log(`Welcome to the quiz ${text}`);
  questions.forEach((item) => {
    let que = prompt(`${item.question}`);
    if (que.toUpperCase() === item.answer.toUpperCase()) {
      console.log("Correct answer");
      score++;
    } else {
      console.log("Wrong answer");
      console.log(`Correct answer is ${item.answer}`);
    }
  });
}

function showScore() {
  console.log("YAY! You SCORED: ", score);

  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

checkString();
showScore();
