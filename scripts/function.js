function startGame(){
    start.style.display = "none"
   gameChoose.style.display = "block"
   
}
function openKeyboard() {
    keyboard.style.display = "block"
    gameChoose.style.display = "none"
    rocket.style.display = "none"
    keyboardBack.style.display = "block"
    gameKeyboard()
}

function startCountDown() {
    countDown.style.display = "block"
    gameChoose.style.display = "none"
    rocket.style.display = "none"
    id1 = setInterval(countdownFunc,1000)
}
function countdownFunc(){
    time.innerHTML--
    if(time.innerHTML < 0){
        clearInterval(id1)
        input.value = ""    
        mainGame()
    }

}
function keyback(){
    location.reload()
}
function gameback(){
    location.reload()
}

function chooseRandomElement(arr){
    let x = Math.floor(Math.random() * arr.length)
    return arr[x]
}
function playAgain(){
    // clearInterval(id2)
    // gameTime.innerHTML = 5
    // time.innerHTML = 3
    location.reload()
}
