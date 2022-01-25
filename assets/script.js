console.log("If you're reading this I am linked")
//Questions 

//function to remove all child nodes of a parent element
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var questionIndex = 0

var questionArray = [{
    question: "Which of the following is a framework?",
    choiceOne: "A. CSS",
    choiceTwo: "B. Bootstrap",
    choiceThree: "C. JavaScript",
    choiceFour: "D. MySQL",
    answer: "B. Bootstrap",

}, {
    question: "question 2?",
    choiceOne: "1",
    choiceTwo: "2",
    choiceThree: "3",
    choiceFour: "4",
}
]



//variables
var startButton = document.querySelector("#start");
var quizChange = document.querySelector(".quizWindow");
var question = document.createElement("div")
var choiceA = document.createElement("button")
var choiceB = document.createElement("button")
var choiceC = document.createElement("button")
var choiceD = document.createElement("button")
var timer = document.createElement("div")


var numCorrect = 0
var numIncorrect = 0
//START THE GAME
startButton.addEventListener("click", function(event){
    console.log("you clicked the button");
    //This brings up the first question of the quiz
    removeAllChildNodes(quizChange);
    quizChange.appendChild(question)
    question.setAttribute("id", "quizQuestions")
    question.textContent = questionArray[questionIndex].question;
    quizChange.appendChild(choiceA);
    choiceA.setAttribute("class", "answer");
    choiceA.setAttribute("id", "choiceA");
    choiceA.textContent = questionArray[questionIndex].choiceOne;
    quizChange.appendChild(choiceB);
    choiceB.setAttribute("class", "answer");
    choiceB.setAttribute("id", "choiceB");
    choiceB.textContent = questionArray[questionIndex].choiceTwo;
    quizChange.appendChild(choiceC);
    choiceC.setAttribute("class", "answer");
    choiceC.setAttribute("id", "choiceC");
    choiceC.textContent = questionArray[questionIndex].choiceThree;
    quizChange.appendChild(choiceD);
    choiceD.setAttribute("class", "answer");  
    choiceD.setAttribute("id", "choiceD");
    choiceD.textContent = questionArray[questionIndex].choiceFour;
    //moves on to next questions and tallies correct or incorrect answers.

    var answerClick = document.querySelectorAll(".answer")
    for (var i=0; i<answerClick.length; i++) {
        answerClick[i].addEventListener("click", function(event){
        console.log("you have clicked an answer")
        })

    }
    
    

})