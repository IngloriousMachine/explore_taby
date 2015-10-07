//Av: Alexander Linde

var questions = [{
    question: "Question 1: How much can a contestant of who wants to be a millionaire win?",
    choices: ["500 000$", "725 000$", "750 000$", "1000000$"],
    correctAnswer: 3
}, {
    question: "Question 2: How many answers can a contestant choose from in who wants to be a millionaire?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: 3
}, {
    question: "Question 3: Has anyone ever cheated in a game of who wants to be a millionaire?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 1
}, {
    question: "Question 6: ",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 0
}, {
    question: "Question 7: ",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 0
}, {
    question: "Question 8: ",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 0
}, {
    question: "Question 9: ",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 0
}, {
    question: "Question 10: What is the name of the million dollar winner that used his lifelife to call his father to let him know he was going to win?",
    choices: ["Johnathan Reeve", "Park Andersen", "John Carpenter", "Jacob Wilmore"],
    correctAnswer: 0
}, {
    question: "Question 11: ",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // när användaren klickar på knappen visar den  nästa fråga
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("You must select an answer!");
                $(document).find(".quizMessage").show();
            } else {
                // tar bort medellanden
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // visar rätt fråga
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Fråga om användaren vill spela igen
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quizen är över, ville användaren spela igen?
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// visar nuvarande fråga och svar
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // questionclass
    $(questionClass).text(question);

    // tar bort <li>
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}