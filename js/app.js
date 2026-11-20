console.log("Brain-box is running!");
// ===== 1. FIND THINGS ON THE PAGE =====
const scoreDisplay = document.querySelector("#score");
const wrongDisplay = document.querySelector("#wrong");
const feedback = document.querySelector("#feedback");

const optionA = document.querySelector("#option-a");
const optionB = document.querySelector("#option-b");
const optionC = document.querySelector("#option-c");
const optionD = document.querySelector("#option-d");

// ===== 2. REMEMBER VALUES =====
const correctAnswer = "A";
let score = 0;
let wrong = 0;
// ===== 3. DECIDE — was the choice right or wrong? =====
function checkAnswer(choice) {
    if (choice === correctAnswer) {
        score = score + 1;
        scoreDisplay.textContent = score;
        feedback.textContent = "Correct! 🎉";
    } else {
                wrong = wrong + 1;
        wrongDisplay.textContent = wrong;
        feedback.textContent = "Not quite. The answer was A.";
 }
 }

 // ===== 4. REACT — listen for a click on each option ===== 
optionA.addEventListener("click", function () {
    checkAnswer("A");
});

optionB.addEventListener("click", function () {
    checkAnswer("B");
});

optionC.addEventListener("click", function () {
    checkAnswer("C");
});

optionD.addEventListener("click", function () {
    checkAnswer("D");
});
