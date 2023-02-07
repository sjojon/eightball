//model
let userName = '';
let userQuestion = '';
let randomNumber;
let eightBall = '';



//view
updateView()
function updateView() {
    let nameTxt = userName ? `Hello ${userName}! ` : "Fill out your name. ";
    let question = userQuestion ? `You asked: ${userQuestion}` : "";
    let answer = eightBall ? `The wisdom of the ball says: ${eightBall}` : "Ask a Question.";
    document.getElementById('app').innerHTML = /*html*/`
    <h1>Magic 8 ball</h1><br>
    <div id="textBox">
    <img id="ball" src="8ball.png"><br>
    <p>Name:</p>
    <input type="text" oninput="userName = this.value"><br>
    <p>Question:</p>
    <input type="text" oninput="userQuestion = this.value"><br>
    <p class="answer">${nameTxt}</p>
    <p class="answer">${question}</p>
    <p class="answer">${answer}</p>
    <button class="btn" onclick="shake()">Shake</button>    
    `;
}


//controller
function shake() {
    randomNumber = Math.floor(Math.random() * 8)

    if (randomNumber === 0) {
        eightBall = 'It is certain';
    }
    else if (randomNumber === 1) {
        eightBall = 'It is decidedly so';
    }
    else if (randomNumber === 2) {
        eightBall = 'Reply hazy try again';
    }
    else if (randomNumber === 3) {
        eightBall = 'Cannot predict now';
    }
    else if (randomNumber === 4) {
        eightBall = 'Do not count on it';
    }
    else if (randomNumber === 5) {
        eightBall = 'My sources say no';
    }
    else if (randomNumber === 6) {
        eightBall = 'Outlook not so good';
    }
    else if (randomNumber === 7) {
        eightBall = 'Signs point to yes';
    }
    updateView()
}