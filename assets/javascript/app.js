
// variable definitions

var questionNumber = 1;
var currentQuestion = "";
var userGuess="";
var timeLeft= 10;
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

var question4 = {
    question: "What is the name of Michael's deceased wife?",
    option1: {
        text: "Tracy",
        correct: true, 
    },
    option2: {
        text: "Stacy",
        correct: false, 
    },
    option3: {
        text: "Rita",
        correct: false, 
    },
    option4: {
        text: "Kitty",
        correct: false, 
    },
}

var question5 = {
    question: "What name does Tobias use for his old English maid character?",
    option1: {
        text: "Mrs Doubtwater",
        correct: false, 
    },
    option2: {
        text: "Mrs Featherbottom",
        correct: true, 
    },
    option3: {
        text: "Miss Sugarglass",
        correct: false, 
    },
    option4: {
        text: "Mrs Fingerduster",
        correct: false, 
    },
}

var question6 = {
    question: "How much money is in the Banana Stand?",
    option1: {
        text: "$100,000",
        correct: false, 
    },
    option2: {
        text: "$10,000",
        correct: false, 
    },
    option3: {
        text: "$250,000",
        correct: true, 
    },
    option4: {
        text: "$1,000,000",
        correct: false, 
    },
}

var question7 = {
    question: "What is the nickname given to Gob by Mark Cherry?",
    option1: {
        text: "Beekeeper",
        correct: false, 
    },
    option2: {
        text: "The Gobler",
        correct: false, 
    },
    option3: {
        text: "Runaway",
        correct: false, 
    },
    option4: {
        text: "Getaway",
        correct: true, 
    },
}

var question8 = {
    question: "What was Lindsay's birth name?",
    option1: {
        text: "Nellie",
        correct: true, 
    },
    option2: {
        text: "Lucy",
        correct: false, 
    },
    option3: {
        text: "Maeby",
        correct: false, 
    },
    option4: {
        text: "George",
        correct: false, 
    },
}


// Function Definitions

function showAnswer() {
    setTimeout(function() {
        initQuestion(currentQuestion);
        timeLeft=11;
        startTimer();
        if (questionNumber > 8) {
            endGame();
            stop();
        }
}, 5000);
}

function initQuestion(object) {
    $("button").css({display: "block"});
    $("#startGame").css({display: "none"});
    $("#question").text(object.question);
    $("#option1").text(object.option1.text);
    $("#option2").text(object.option2.text);
    $("#option3").text(object.option3.text);
    $("#option4").text(object.option4.text);
    $("#mainDisplay").text("");
    $("#mainDisplay2").text("");
    $("#correctDisplay").text("");
    if (questionNumber > 8) {
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
    displayGif();
    questionNumber++;
    corrects++;
    $("button").css({display: "none"});
    questionCheck();
    stop();
    showAnswer();
}

function wrongAnswer() {
    $("#question").text("Incorrect!");
    displayGif();
    questionNumber++;
    wrongs++;
    $("button").css({display: "none"});
    questionCheck();
    stop();
    showAnswer();
}

function outOfTime() {
    $("#question").text("Time's Up!");
    displayGif();
    questionNumber++;
    wrongs++;
    $("button").css({display: "none"});
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
    } else if (questionNumber === 4) {
        currentQuestion = question4;
    } else if (questionNumber === 5) {
        currentQuestion = question5;
    } else if (questionNumber === 6) {
        currentQuestion = question6;
    } else if (questionNumber === 7) {
        currentQuestion = question7;
    } else if (questionNumber === 8) {
        currentQuestion = question8
    }
}

function endGame() {
    $("#question").text("Game Over!");
    $("#correctDisplay").text("How did you do?");
    $("#mainDisplay").text("Correct Answers: " + corrects);
    $("#mainDisplay2").text("Wrong Answers: " + wrongs);
    $("#startGame").text("Play Again?");
    $("button").css({display: "none"});
    $("#startGame").css({display: "block"});
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

function displayGif() {
    if (questionNumber === 1) {

        $("#correctDisplay").text("Teamocil is a psychiatric drug developed in the mid-1990s by the Natural Life Food Company.");
        $("#mainDisplay").html("<center> <img src='assets/images/teamocil.gif'> </center>")
    
        } else if (questionNumber === 2) {
    
        $("#correctDisplay").text("It's the FINAL COUNTDOWN! DUNANA NAAA DU NANANA NAAA");
        $("#mainDisplay").html("<center> <img src='assets/images/gob.gif'> </center>")
    
        } else if (questionNumber === 3) {
    
        $("#correctDisplay").text("Buster lost his left hand but don't worry! He's going to be 'all right'!");       
        $("#mainDisplay").html("<center> <img src='assets/images/buster.gif'> </center>")
    
        } else if (questionNumber === 4) {

        $("#correctDisplay").text("Michael's wife's name is as Ann as the nose on plain's face: Tracy!");       
        $("#mainDisplay").html("<center> <img id='her' src='assets/images/her.gif'> </center>")

        } else if (questionNumber === 5) {

        $("#correctDisplay").text("Okay who'd like a banger in the mouth? It's Mrs Featherbottom!");       
        $("#mainDisplay").html("<center> <img src='assets/images/featherbottom.gif'> </center>")

        } else if (questionNumber === 6) {

        $("#correctDisplay").text("The Banana Stand had $250,000 (before it was burned down)");       
        $("#mainDisplay").html("<center> <img src='assets/images/banana.gif'> </center>")

        } else if (questionNumber === 7) {

        $("#correctDisplay").text("Gob is named Getaway for driving Mark Cherry's limo. Runaway Getaway! Get away Getaway!");       
        $("#mainDisplay").html("<center> <img src='assets/images/mistake.gif'> </center>")

        } else if (questionNumber === 8) {

        $("#correctDisplay").text("The only adopted Bluth sibling was originally named Nellie");       
        $("#mainDisplay").html("<center> <img src='assets/images/chicken.gif'> </center>")
            
        }
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
    $("#startGame").css({display: "none"});
    startTimer();
})
