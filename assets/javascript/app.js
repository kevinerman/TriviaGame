
// variable definitions

var questionNumber = 1;
var currentQuestion = "";
var userGuess="";
var timeLeft= 15;
var intervalId;
var corrects = 0;
var wrongs = 0;

var question1 = {
    question: "Which of these business ventures was not created by George Bluth?",
    option1: {
        text: "Teamocil",
        correct: true, 
    },
    option2: {
        text: "Sudden Valley",
        correct: false, 
    },
    option3: {
        text: "The Banana Stand",
        correct: false, 
    },
    option4: {
        text: "The Cornballer",
        correct: false, 
    },
}

var question2 = {
    question: "What song does Gob use for his illusions?",
    option1: {
        text: "Africa",
        correct: false, 
    },
    option2: {
        text: "Sound of Silence",
        correct: false, 
    },
    option3: {
        text: "The Final Countdown",
        correct: true, 
    },
    option4: {
        text: "More Than a Feeling",
        correct: false, 
    },
}

var question3 = {
    question: "What part of Buster was eaten by a loose seal?",
    option1: {
        text: "His Left Eye",
        correct: false, 
    },
    option2: {
        text: "His Left Hand",
        correct: true, 
    },
    option3: {
        text: "His Right Hand",
        correct: false, 
    },
    option4: {
        text: "His Right Eye",
        correct: false, 
    },
}

// Function Definitions

function showAnswer() {
    setTimeout(function() {
        initQuestion(currentQuestion);
        timeLeft=16;
        startTimer();
        if (questionNumber > 3) {
            endGame();
            stop();
        }
}, 5000);
}

function initQuestion(object) {
    $("button").css({visibility: "visible"});
    $("#startGame").css({visibility: "hidden"});
    $("#question").text(object.question);
    $("#option1").text(object.option1.text);
    $("#option2").text(object.option2.text);
    $("#option3").text(object.option3.text);
    $("#option4").text(object.option4.text);
    $("#mainDisplay").text("");
    $("#mainDisplay2").text("");
    $("#correctDisplay").text("");
    if (questionNumber > 3) {
        endGame();
    }
};

function answerCheck() {
    if (userGuess === true) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
}

function correctAnswer() {
    $("#question").text("Correct!");
    if (questionNumber === 1) {

    $("#correctDisplay").text("Teamocil is a psychiatric drug developed in the mid-1990s by the Natural Life Food Company.");
    $("#mainDisplay").html("<center> <img src='assets/images/teamocil.gif'> </center>")

    } else if (questionNumber === 2) {

    $("#correctDisplay").text("It's the FINAL COUNTDOWN! DUNANA NAAA DU NANANA NAAA");
    $("#mainDisplay").html("<center> <img src='assets/images/gob.gif'> </center>")

    } else if (questionNumber === 3) {

    $("#correctDisplay").text("Don't worry he's going to be 'all right'");       
    $("#mainDisplay").html("<center> <img src='assets/images/buster.gif'> </center>")

    }
    questionNumber++;
    corrects++;
    $("button").css({visibility: "hidden"});
    questionCheck();
    stop();
    showAnswer();
}

function wrongAnswer() {
    $("#question").text("Incorrect!");
    if (questionNumber === 1) {

    $("#correctDisplay").text("Teamocil is a psychiatric drug developed in the mid-1990s by the Natural Life Food Company.");
    $("#mainDisplay").html("<center> <img src='assets/images/teamocil.gif'> </center>")

    } else if (questionNumber === 2) {

    $("#correctDisplay").text("It's the FINAL COUNTDOWN! DUNANA NAAA DU NANANA NAAA");
    $("#mainDisplay").html("<center> <img src='assets/images/gob.gif'> </center>")

    } else if (questionNumber === 3) {

    $("#correctDisplay").text("Buster lost his left hand but don't worry! He's going to be 'all right'!");       
    $("#mainDisplay").html("<center> <img src='assets/images/buster.gif'> </center>")

    }
    questionNumber++;
    wrongs++;
    $("button").css({visibility: "hidden"});
    questionCheck();
    stop();
    showAnswer();
}

function outOfTime() {
    $("#question").text("Time's Up!");
    if (questionNumber === 1) {

    $("#correctDisplay").text("Teamocil is a psychiatric drug developed in the mid-1990s by the Natural Life Food Company.");
    $("#mainDisplay").html("<center> <img src='assets/images/teamocil.gif'> </center>")

    } else if (questionNumber === 2) {

    $("#correctDisplay").text("It's the FINAL COUNTDOWN! DUNANA NAAA DU NANANA NAAA");
    $("#mainDisplay").html("<center> <img src='assets/images/gob.gif'> </center>")

    } else if (questionNumber === 3) {

    $("#correctDisplay").text("Buster lost his left hand but don't worry! He's going to be 'all right'!.");       
    $("#mainDisplay").html("<center> <img src='assets/images/buster.gif'> </center>")

    }
    questionNumber++;
    wrongs++;
    $("button").css({visibility: "hidden"});
    questionCheck();
    stop();
    showAnswer();
}

function questionCheck() {
    if (questionNumber === 1) {
        currentQuestion = question1; 
    } else if (questionNumber === 2) {
        currentQuestion = question2;
    } else if (questionNumber === 3) {
        currentQuestion = question3;
    }
}

function endGame() {
    $("#question").text("Game Over!");
    $("#correctDisplay").text("How did you do?");
    $("#mainDisplay").text("Correct Answers: " + corrects);
    $("#mainDisplay2").text("Wrong Answers: " + wrongs);
    $("#startGame").text("Play Again?");
    $("button").css({visibility: "hidden"});
    $("#startGame").css({visibility: "visible"});
}


function startTimer() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    timeLeft--;
    $("#time-left").text("Time Left: " + timeLeft);

    if (timeLeft === 0) {
        stop();
        outOfTime();

    }
}

function stop() {

    clearInterval(intervalId);
  }

// Adding functionality to button clicks

$("#option1").on("click", function() {
    questionCheck()
    userGuess = currentQuestion.option1.correct;
    answerCheck();
})

$("#option2").on("click", function() {
    questionCheck();
    userGuess = currentQuestion.option2.correct;
    answerCheck();
})

$("#option3").on("click", function() {
    questionCheck();
    userGuess = currentQuestion.option3.correct;
    answerCheck();
})

$("#option4").on("click", function() {
    questionCheck();
    userGuess = currentQuestion.option4.correct;
    answerCheck();
})

$("#startGame").on("click", function() {
    corrects = 0;
    wrongs = 0;
    questionNumber = 1;
    initQuestion(question1);
    $("button").css({visibility: "visible"});
    $("#startGame").css({visibility: "hidden"});
    startTimer();
})
