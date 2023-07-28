var startingButton = document.getElementById("play")
var start = document.getElementById("start")
var gameChoose = document.getElementById("gamechoose")
var firstButton = document.getElementById("firstButton")
var secondButton = document.getElementById("secondButton")
var keyboard = document.getElementById("keyboard")
var rocket = document.getElementById("figure-jumping")
var game = document.getElementById("game")
var countDown = document.getElementById("count-down")
var time = document.getElementById("start-count")
var keyboardBack = document.getElementById("keyboardBack")
var gameBack = document.getElementById("gameBack")
var word = document.getElementById("word")
var score = document.getElementById("score")
var input = document.getElementById("input")
var highScore = document.getElementById("high-score")
var gameTime = document.getElementById("gameTime")
var gameOverDiv = document.getElementById("gameOverDiv")
var myScoreEnd = document.getElementById("myScoreEnd")
var text = document.getElementById("h2")
var playAgainButton = document.getElementById("playAgain")
var audio = document.getElementById("myAudio")
var thirdButton = document.getElementById("thirdButton")
var h3SecondGame = document.getElementById("h3SecondGame")


var isIncreased = false
var countOfIncrease = 0

startingButton.addEventListener("click",startGame)
firstButton.addEventListener("click",openKeyboard)
secondButton.addEventListener("click",startCountDown)
keyboardBack.addEventListener("click",keyback)
gameBack.addEventListener("click",gameback)
playAgainButton.addEventListener("click",playAgain)
thirdButton.addEventListener("click",secondGame)

var letterCode = chooseRandomElement(letterArr)
var letterElement = document.getElementById(letterCode)

function gameKeyboard(){
    letterElement.classList.add("selected")
    document.addEventListener("keydown", foo)
}
    
function foo(event){
        audio.play()
        if(event.code == letterCode){
            letterElement.classList.remove("selected")
            letterCode = chooseRandomElement(letterArr)
            letterElement = document.getElementById(letterCode)
            letterElement.classList.add("selected")            
        }
        else{
            document.getElementById(event.code).classList.add("hit")
            setTimeout(function removeHit(){
                 let thisLetter = document.getElementById(event.code)
                
                thisLetter.classList.remove("hit")
            },1000)
        }

    
}
let randomWord
function mainGame(){
    countDown.style.display = "none"
    game.style.display = "block"
    gameBack.style.display = "block"
    h3SecondGame.innerHTML = ""
    randomWord = chooseRandomElement(words)
    word.innerHTML = randomWord
    score.innerHTML = 0
    id2 = setInterval(function(){
        if(gameTime.innerHTML == 0){
            clearInterval(id2)
            gameOver()
        }
        gameTime.innerHTML--
    },1000)
    if(!localStorage.highScore){
        localStorage.setItem("highScore",0)
    }
    highScore.innerHTML = localStorage.highScore
    input.addEventListener("keydown",function(event){
        if(event.code == "Enter"){
            if(randomWord == input.value){
                input.value = ""
                if(localStorage.highScore == score.innerHTML){
                    isIncreased = true 
                    countOfIncrease++
                    highScore.innerHTML++
                    localStorage.highScore++               
                }
                gameTime.innerHTML =+gameTime.innerHTML+ 3
                score.innerHTML++
            }
            else{
                if(gameTime.innerHTML >= 2){
                    gameTime.innerHTML =gameTime.innerHTML -2
                }
               input.value = ""
            }
            randomWord = chooseRandomElement(words)
            word.innerHTML = randomWord
        }
    })   
}

function secondGame(){
    gameChoose.style.display = "none"
    rocket.style.display = "none"
    game.style.display = "block"
    gameBack.style.display = "block"
    h3SecondGame.innerHTML = "You have 1 minute"
    gameTime.innerHTML = 60

    randomWord = chooseRandomElement(words)
    word.innerHTML = randomWord

    score.innerHTML = 0
    id2 = setInterval(function(){
        if(gameTime.innerHTML == 0){
            clearInterval(id2)
            timeIsUp()
        }
        gameTime.innerHTML--
    },1000)
    if(!localStorage.secondHighScore){
        localStorage.setItem("secondHighScore",0)
    }
    highScore.innerHTML = localStorage.secondHighScore
    input.addEventListener("keydown",function(event){
        if(event.code == "Enter"){
            if(randomWord == input.value){
                input.value = ""
                randomWord = chooseRandomElement(words)
                word.innerHTML = randomWord
                if(localStorage.secondHighScore == score.innerHTML){
                    isIncreased = true 
                    countOfIncrease++
                    highScore.innerHTML++
                    localStorage.secondHighScore++               
                }
                score.innerHTML++
            }

               input.value = ""
        }
    })   
}


function gameOver(){
    gameOverDiv.style= "display:block"
    game.style = "display:none"
    gameBack.style  = "display:none"
    myScoreEnd.innerHTML = score.innerHTML
    if(isIncreased){
        if(countOfIncrease == 1){
            text.innerHTML = "Your high score is increased  by " + countOfIncrease + " point"
        }
        else{
            text.innerHTML = "Your high score is increased by " + countOfIncrease + " points"
        }
    }
}
function timeIsUp(){
    gameOverDiv.style= "display:block"
    game.style = "display:none"
    gameBack.style  = "display:none"
    myScoreEnd.innerHTML = score.innerHTML
    if(isIncreased){
        if(countOfIncrease == 1){
            text.innerHTML = "Your high score is increased  by " + countOfIncrease + " point"
        }
        else{
            text.innerHTML = "Your high score is increased by " + countOfIncrease + " points"
        }
    }
}


