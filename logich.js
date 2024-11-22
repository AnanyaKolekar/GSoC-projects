const words = [
    { type: "riddle", question: "What has keys but can't open locks?", answer: "piano" },
    { type: "riddle", question: "What runs but never walks?", answer: "water" },
    { type: "riddle", question: "What has a head, a tail, but no body?", answer: "coin" },
    { type: "riddle", question: "I am tall when I am young, and I am short when I am old. What am I?", answer: "candle" },
    { type: "riddle", question: "What can travel around the world while staying in the corner?", answer: "stamp" },
    { type: "riddle", question: "What has a heart that doesn't beat?", answer: "artichoke" },
    { type: "riddle", question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { type: "riddle", question: "What gets wetter the more it dries?", answer: "towel" },
    { type: "riddle", question: "What can be cracked, made, told, and played?", answer: "joke" },
    { type: "riddle", question: "What comes down but never goes up?", answer: "rain" },
    { type: "riddle", question: "What has one head, one foot, and four legs?", answer: "bed" },
    { type: "riddle", question: "What begins with T, ends with T, and has T in it?", answer: "teapot" },
    { type: "riddle", question: "What has many keys but can't open a single lock?", answer: "piano" },
    { type: "riddle", question: "What is always in front of you but can't be seen?", answer: "future" },
];
let rdmword = words[Math.floor(Math.random() * words.length)];
let question = rdmword.question;
let answer = rdmword.answer;
let attempts = 6;
let guessedAnswer = "";

document.getElementById('riddle').innerText = question;
document.getElementById('message').innerText = `You have ${attempts} attempts left to guess the answer.`;

function guessAnswer() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase().trim();
    guessInput.value = '';

    if (guessedAnswer === guess) {
        document.getElementById('message').innerText = "You already guessed that answer!";
        return;
    }

    guessedAnswer = guess;

    if (guess === answer.toLowerCase()) {
        // Show the win message in the winmessage div
        document.getElementById('winmessage').innerText = "Congratulations! You guessed the correct answer!";
        document.getElementById('winmessage').style.color = "green";
        document.getElementById("message").innerText = "";
    } else {
        attempts--;
        if (attempts > 0) {
            document.getElementById('message').innerText = `Wrong guess. You have ${attempts} attempts left.`;
        } else {
            document.getElementById('message').innerText = `Game over. The correct answer was ${answer}.`;
        }
    }
}
function restart() {
    rdmword = words[Math.floor(Math.random() * words.length)]; 
    question = rdmword.question;
    answer = rdmword.answer;
    attempts = 6;
    guessedAnswer = "";
    document.getElementById('riddle').innerText = question;
    document.getElementById('message').innerText = `You have ${attempts} attempts left to guess the answer.`;
    document.getElementById('winmessage').innerText = ''; 
    document.getElementById('guessInput').value = '';
}
