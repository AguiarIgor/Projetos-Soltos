const questionsText = [
    "What's the best of all colors?",
    "My favorite programming language is:",
    "How older am I?",
    "What's my favorite school subject?",
    "Which is my favorite game of all times?"
];
const answers = [
    ["Purple", "Blue", "Red", "Black"],
    ["Java", "Python", "Javascript", "C#"],
    ["17", "22", "18", "None of the Options"],
    ["Chemistry", "Portuguese", "English", "Math"],
    ["Unchivalry", "Digimon World 3", "Sea of Pirates", "Pokemon UnTurn"]
];
const backList = [
    ["purple", "blue", "red", "black"],
    ["java-back.png", "python-back.png", "js-back.png", "c#-back-png"]
]

const question = document.querySelector("h2");
const buttons = document.querySelectorAll("button");
const originalColorButton = buttons[0].style.backgroundColor;
var questionNumber = 1;
var points = 0;
var errors = 0;

QuizPlay();
buttons.forEach((button) => checkAnswer(button));

function QuizPlay() {
    buttons.forEach((button) => hoverColor(button));
    if (questionNumber <= 5) {
        question.innerText = questionsText[questionNumber - 1];
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerText = answers[questionNumber - 1][i];
        }
    }
    switch (questionNumber) {
        case 1:
            buttons[1].classList.add("answer-correct");
            break;
        case 2:
            buttons[0].classList.add("answer-correct");
            break;
        case 3:
            buttons[2].classList.add("answer-correct");
            break;
        case 4:
            buttons[0].classList.add("answer-correct");
            break;
        case 5:
            buttons[1].classList.add("answer-correct");
            break;
        case 6:
            FinalResult();
            break;
    }
}

function hoverColor(e) {
    e.style.cursor = "pointer";

    if (questionNumber == 1) {
        e.addEventListener('mouseover', () => e.style.backgroundColor = e.innerText);
        e.addEventListener('mouseout', () => e.style.backgroundColor = originalColorButton);
    }
    if (questionNumber == 2) {
        e.removeEventListener('mouseover', () => e.style.backgroundColor = e.innerText);
        // e.addEventListener('mouseover', () => e.style);
        // e.addEventListener('mouseout', () => );
        e.style.backgroundColor = originalColorButton;
    }
}

function checkAnswer(e) {
    e.addEventListener('click', function () {
        if (e.classList.contains("answer-correct")) {
            ++points;
            e.style.backgroundColor = "green";
        } else {
            ++errors;
            e.style.backgroundColor = "red";
        }
        ++questionNumber;
        e.classList.remove("answer-correct");
        setTimeout(QuizPlay, 1000);
    });
}

function FinalResult() {
    const results = [
        `Bem, você com certeza não me conhece\nVocê não acertou UMA\nPontos: ${points}\nErros: ${errors}`,
        `Até que você sabe alguma coisa né?\nPena que nem no básico tu tira 10\nPontos: ${points}\nErros: ${errors}`,
        `Agora eu gostei, acertou tudinho, até mesmo a pegadinha da última perguntaz\nMeus Parabéns\nRespostas Acertadas: ${points}\nRespostas Erradas: ${errors}`
    ];
    const finalSet = document.querySelector("section");
    const finalMsg = document.querySelector(".finalMessage");
    buttons.forEach((button) => button.hidden = true);
    finalSet.classList.add("finalSet")
    finalMsg.hidden = false;
    if (points <= 1) finalMsg.innerText = results[0];
    if (points >= 2 && points <= 4) finalMsg.innerText = results[1];
    if (points == 5) finalMsg.innerText = results[2];
}