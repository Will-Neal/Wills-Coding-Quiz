console.log("If you're reading this I am linked")
//Questions 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var questionOne = {
    question: "test123",
    choiceOne: "a",
    choiceTwo: "b",
    choiceThree: "c",
}



//variables
var startButton = document.querySelector("#start");
var quizChange = document.querySelector(".quizWindow");
var question = document.createElement("h2")
var choiceA = document.createElement("button")
var choiceB = document.createElement("button")
var choiceC = document.createElement("button")
var choiceD = document.createElement("button")
var timer = document.createElement("div")


//START THE GAME
startButton.addEventListener("click", function(event){
    console.log("you clicked the button");
    removeAllChildNodes(quizChange);
    //quizChange.remove()
    quizChange.appendChild(question)
    quizChange.setAttribute("id", "quizQuestions")
    quizChange.textContent = "This is the first question. Choose one of the four answers: "
    quizChange.appendChild(choiceA);
    choiceA.setAttribute("id", "choiceA");
    choiceA.textContent = "I am the first answer"
    quizChange.appendChild(choiceB);
    choiceB.setAttribute("id", "choiceB");
    choiceB.textContent = "I am the second answer"
    quizChange.appendChild(choiceC);
    choiceC.setAttribute("id", "choiceC");
    choiceC.textContent = "I am the third answer"
    quizChange.appendChild(choiceD);
    choiceD.setAttribute("id", "choiceD");
    choiceD.textContent = "I am the fourth answer"
})