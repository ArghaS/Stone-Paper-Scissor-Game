let userScoreCount = 0
let compScoreCount = 0

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")
let userScore = document.querySelector("#user-score")
let compScore = document.querySelector("#comp-score")
let btn = document.querySelector("#btn")

const genCompChoice = () => {
    let options = ["stone", "paper", "scissor"]
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

const drawGame = () => {
    msg.innerText = "Game was draw. Try again."
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true){
        userScoreCount++
        userScore.innerText = userScoreCount
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compScoreCount++
        compScore.innerText = compScoreCount
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}. Try again`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {

    //Generate computer choice
    const compChoice = genCompChoice()

    if(userChoice === compChoice){
        //draw game
        drawGame()
    }
    else{
        let userWin=true

        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true
        }
        else{
            userWin = compChoice === "stone" ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

const scoreReset = () => {
    userScoreCount = 0
    compScoreCount = 0
    userScore.innerText = "0"
    compScore.innerText = "0"
}

const reset = () => {
    scoreReset()
    msg.innerText = "Play your move"
    msg.style.backgroundColor = "#081b31"
}

btn.addEventListener("click",reset)