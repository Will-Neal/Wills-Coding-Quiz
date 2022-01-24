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
var startButton = document.querySelector("#start")
var quizChange = document.querySelector(".quizWindow")
var question = document.createElement("h2")
var body = document.getElementById


//START THE GAME
startButton.addEventListener("click", function(event){
    console.log("you clicked the button");
    removeAllChildNodes(quizChange);
    //quizChange.remove()
    quizChange.appendChild("button")
})