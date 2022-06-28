let randomNumber = 0;
let numberOfAttempts = 0;
const playgame = document.getElementById('playgame');
let prevGuess = "";
let winner = false;
const initialBoard = document.getElementById('initialBoard');
let audio = new Audio("mixkit-video-game-mystery-alert-234.wav");
let wrongAnswerAudio = new Audio("wrong-38598.mp3");
let correctAnswerAudio = new Audio("good-6081.mp3");
const playBoard = document.getElementById('mainBoard');

const playRandomly = () =>{
    let userInput = userValue.value;
    audio.pause();
    wrongAnswerAudio.pause();
    correctAnswerAudio.pause();
    userInput.trim();
    if(userInput == "" || userInput < 1){
        wrongAnswerAudio.play();
        choose.innerText = "NO INPUT⚡";
    }else if(userInput > randomNumber && !winner){
        wrongAnswerAudio.play();
        console.log(prevGuess);
        ++numberOfAttempts;
        choose.innerText = "⚡😒NO! YOUR GUESS IS HIGH⚡";
        attempts.innerText = numberOfAttempts;
        console.log(prevGuess);
        allGuess.innerText = prevGuess.concat(`${userInput} `);
        userValue.value = "";
    }
    else if(userInput < randomNumber && !winner){
        wrongAnswerAudio.play();
        prevGuess.concat(`${userInput} `);
        ++numberOfAttempts;
        choose.innerText = "⚡NO! YOUR GUESS IS LOW🙄";
        attempts.innerText = numberOfAttempts;
        allGuess.innerText = prevGuess.concat(`${userInput} `);
        userValue.value = "";
    }
    else if(userInput == randomNumber && !winner){
        correctAnswerAudio.play();
        winner = true;
        allGuess.innerText = prevGuess.concat(`${userInput} `);
        ++numberOfAttempts;
        choose.innerText = "Correct!😍😎";
        attempts.innerText = numberOfAttempts;
        userValue.disabled = true;
        newgame.style.display = "block";
    }
    else{
        wrongAnswerAudio.play();
        choose.innerText = "Not A Valid Input🤐";
        userValue.value = "";
    }
}
playgame.addEventListener('click', () => {
    audio.play();
    initialBoard.style.display = 'none';
    playBoard.style.display = 'block';
    randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    numberOfAttempts = 0;
    winner = false;
})

guess.addEventListener('click', playRandomly);