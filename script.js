// script.js

// Quiz Data
const questionsData = {
    science: [
      { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "H2"], correct: "H2O" },
      { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: "Mars" },
      { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: "Carbon Dioxide" },
      { question: "How many bones are in the adult human body?", options: ["206", "210", "195", "201"], correct: "206" },
      { question: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], correct: "Leaf" },
    ],
    history: [
      { question: "Who was the first president of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], correct: "George Washington" },
      { question: "In which year did World War II end?", options: ["1945", "1944", "1939", "1950"], correct: "1945" },
      { question: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Kublai Khan", "Han Wudi", "Emperor Wu"], correct: "Qin Shi Huang" },
      { question: "What was the name of the ship that carried the Pilgrims to America in 1620?", options: ["Mayflower", "Santa Maria", "Discovery", "Beagle"], correct: "Mayflower" },
      { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Michael Faraday"], correct: "Alexander Graham Bell" },
    ],
    math: [
      { question: "What is 12 + 15?", options: ["27", "25", "30", "35"], correct: "27" },
      { question: "What is 8 * 7?", options: ["56", "64", "49", "56"], correct: "56" },
      { question: "What is 144 ÷ 12?", options: ["12", "14", "10", "8"], correct: "12" },
      { question: "What is the square root of 81?", options: ["9", "8", "7", "6"], correct: "9" },
      { question: "What is 22 - 9?", options: ["15", "13", "14", "12"], correct: "13" },
    ]
  };
  
  let currentCategory = 'science';
  let currentQuestionIndex = 0;
  let correctAnswersCount = 0;
  
  function startQuiz() {
    const categorySelect = document.getElementById("category-select");
    currentCategory = categorySelect.value;
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
  
    // Hide category selection and show the quiz section
    document.getElementById("category-section").style.display = 'none';
    document.getElementById("quiz-section").style.display = 'block';
    document.getElementById("result-section").style.display = 'none';
  
    // Show the first question
    showQuestion();
  }
  
  function showQuestion() {
    const question = questionsData[currentCategory][currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = ''; // Clear previous answers
  
    question.options.forEach(option => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = option;
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      answersContainer.appendChild(label);
    });
  }
  
  function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
  
    const correctAnswer = questionsData[currentCategory][currentQuestionIndex].correct;
    if (selectedAnswer.value === correctAnswer) {
      correctAnswersCount++;
    }
  
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionsData[currentCategory].length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz-section").style.display = 'none';
    document.getElementById("result-section").style.display = 'block';
    document.getElementById("result-message").textContent = `You got ${correctAnswersCount} out of ${questionsData[currentCategory].length} correct!`;
  }
  
  function retryQuiz() {
    startQuiz();
  }
  
  function endQuiz() {
    window.location.reload();
  }
  