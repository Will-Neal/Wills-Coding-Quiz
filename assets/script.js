// console.log("If you're reading this I am linked")
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
    question: "Which code should start a conditional?",
    choiceOne: "A. var",
    choiceTwo: "B. function",
    choiceThree: "C. for",
    choiceFour: "D. if",
    answer: "D. if",
}, {
    question: "what does i++ do?",
    choiceOne: "A. Increment the value of i by 2",
    choiceTwo: "B. Instantiate a variable named i++",
    choiceThree: "C. Increment the value of i by 1",
    choiceFour: "D. Add an i element",
    answer: "C. Increment the value of i by 1",
}, {
    question: "I want to call a function when I click a button, which JavaScript function would I use?",
    choiceOne: "A. setAttribute()",
    choiceTwo: "B. addEventListener()",
    choiceThree: "C. createElement()",
    choiceFour: "D. appendChild",
    answer: "B. addEventListener()",
}, {
    question: "What is the proper sequence for getting your changes to your git repository?",
    choiceOne: "A. Add, Commit, Push",
    choiceTwo: "B. Pull, Status, Main",
    choiceThree: "C. Commit, Pull, Push",
    choiceFour: "D. Push, Add, Pull",
    answer: "A. Add, Commit, Push",
}
]



//variables
var startButton = document.querySelector("#start");
var quizChange = document.querySelector(".quizWindow");
var question = document.createElement("div")
var showScore = document.createElement("div")
var highScore = document.createElement("input")
var initials = document.createElement("h6")
var submit = document.createElement("button")
var choiceA = document.createElement("button")
var choiceB = document.createElement("button")
var choiceC = document.createElement("button")
var choiceD = document.createElement("button")
var timer = document.querySelector(".timer")
var feedback = document.createElement("div")



var numCorrect = 0
var numIncorrect = 0
var score = numCorrect * 20
var timeLeft = 30


//START THE GAME
if(startButton) {
startButton.addEventListener("click", function(event){
    // console.log("you clicked the button");
    //This brings up the first question of the quiz
    removeAllChildNodes(quizChange);
    countdown();
    quizChange.appendChild(question);
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
    var answerClick = document.querySelectorAll(".answer");
    //For loop that adds event listener 
    for (var i=0; i<answerClick.length; i++) {
        answerClick[i].addEventListener("click", function(event){
        // console.log("you have clicked an answer")
        // console.log(event.target.innerHTML)    
        if (event.target.innerHTML == questionArray[questionIndex].answer && questionIndex < 4) {
            ++numCorrect;
            ++questionIndex;
            timeLeft = timeLeft + 5;
            // console.log("the question index is " + questionIndex)
            // console.log("number correct is " + numCorrect)
            quizChange.appendChild(feedback)
            feedback.setAttribute("class", "feedback")
            feedback.textContent = "Correct! +5s"
            nextQuestion()
        }  else if (event.target.innerHTML != questionArray[questionIndex].answer && questionIndex < 4){
            ++numIncorrect;
            ++questionIndex;
            timeLeft = timeLeft - 10; 
            // console.log("I Clicked a wrong number and the index is " + questionIndex)
            // console.log("the number incorrect is " + numIncorrect)
            quizChange.appendChild(feedback)
            feedback.setAttribute("class", "feedback")
            feedback.textContent = "Incorrect -10s"
            nextQuestion()
        } else if (event.target.innerHTML == questionArray[questionIndex].answer && questionIndex == 4) {
           numCorrect = numCorrect + 1;
            // console.log("GameOver");
            gameOver()
            

        } else {
            // console.log("GameOver");
            gameOver()
            
        }
        })
        }

})}

//function to refresh question and answer choices
function nextQuestion() {
    question.textContent = questionArray[questionIndex].question;
    choiceA.textContent = questionArray[questionIndex].choiceOne;
    choiceB.textContent = questionArray[questionIndex].choiceTwo;
    choiceC.textContent = questionArray[questionIndex].choiceThree;
    choiceD.textContent = questionArray[questionIndex].choiceFour;
    // feedback.textContent = ""
}




//Controls the timer countdown
function countdown() {
  //var timeLeft = 30;
  var timeInterval = setInterval(function () {
  timer.textContent = "Time Remaining: " + timeLeft + " Second(s)"
//   console.log(timeLeft);
  
    timeLeft--;
    if (timeLeft <= -1) {
      clearInterval(timeInterval)
      timer.textContent = "Time Remaining: " + 0 + " Second(s)"
      gameOver()
    }
    
  }, 1000);
}

//Function to be launched when out of questions or when the timer runs out

function gameOver() {
    timeLeft = 0
    removeAllChildNodes(quizChange);
    quizChange.appendChild(question);
    question.textContent = "Game Over";
    question.appendChild(showScore);
    showScore.textContent = "Your score was " + (numCorrect  * 20);
    showScore.appendChild(initials)
    initials.textContent = "Enter your initials"
    question.appendChild(highScore);
    highScore.setAttribute("type", "text");
    question.appendChild(submit);
    submit.textContent = "Submit";
    submit.setAttribute("id", "submitButton");
    var subBtn = document.querySelector("#submitButton");
    subBtn.addEventListener('click', function(){
        var userName = document.querySelector("input").value;
        var score = numCorrect * 20;
        // nameArray.push(userName)
        // scoreArray.push(score)
        addNewUser(score, userName)
        // saveArray = []
        // var saveObj = {
        //     score : score,
        //     username : userName}
        // saveArray.push(saveObj)
        // localStorage.setItem("userData", JSON.stringify(saveArray))
        // localStorage.setItem('name', userName);
        // localStorage.setItem('score', score);
        
        location.href = "assets/highScorePage.html";
            })
}


clearButton = document.querySelector("#clearButton") 
if (clearButton) {
    clearButton.addEventListener("click", function(event) {
        localStorage.clear()
        document.location.reload()
        // listErase = document.querySelectorAll("ol")
        // console.log(listErase)
        // console.log('youre hitting the button')
    })
}
//Writes the highscores to the HighScorePage.html page
function writeHighScores() {
    // console.log("write highscores ran")
    var scoreListEl = document.querySelector(".scoreList");
    
    var storedData = localStorage.getItem("userData")
    var parsed = JSON.parse((storedData) || "[]")
    if (parsed){console.log( parsed)}
    
    for (var i=0; i<parsed.length ; i+=2){
    var listEl = document.createElement("li");
    var user = parsed[i].username
    console.log(parsed.length)
    var score = parsed[i].score
    console.log(score)
  
    if(scoreListEl){
    listEl.appendChild(document.createTextNode((i/2+1) + " - " + user + " - " + score))
    scoreListEl.appendChild(listEl);
    console.log("i am a cycle")}}}


writeHighScores()


//Function that creates an array and stores it in local storage
function addNewUser(scr, usr) {
  var saveArray = [];

  var userData = {
    score: scr,
    username: usr,
  };
 saveArray.push(userData);
saveArray = saveArray.concat(JSON.parse(localStorage.getItem('userData')||'[]'));
  console.log("userData" + userData)
  console.log("saveArray" + saveArray)


  localStorage.setItem("userData", JSON.stringify(saveArray));
  console.log(localStorage.setItem("userData", JSON.stringify(saveArray)))
};