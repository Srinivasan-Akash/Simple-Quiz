const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let quiz = document.getElementsByClassName("quiz-header")[0];
let questionEl = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    questionEl.innerText = quizData[currentQuiz].question
    a_text.innerText = quizData[currentQuiz].a
    b_text.innerText = quizData[currentQuiz].b
    c_text.innerText = quizData[currentQuiz].c
    d_text.innerText = quizData[currentQuiz].d
}

function deselectAnswers() {
    let radio = document.querySelector('input[type=radio]:checked');
    radio.checked = false;
    quiz.style.background = "#5DA3FA"
}

function getSelected() {
    let getSelectedAnswer = document.querySelector('input[type=radio]:checked');
    
    
    if(getSelectedAnswer.ariaLabel === quizData[currentQuiz].correct){
        quiz.style.background = "green"
        score += 1
    } else {
        quiz.style.background = "red"
    }

    if (getSelectedAnswer == null){
        alert("Please Select an answer to continue !!")
    }
    console.log(getSelectedAnswer.ariaLabel, quizData[currentQuiz].correct)
}

submitBtn.addEventListener('click', () => {
    getSelected()
    if(currentQuiz === quizData.length-1){
        quiz.remove()
        submitBtn.innerText = score+ "/4"
    }
    setTimeout(() => {
        currentQuiz+=1
        loadQuiz()
        deselectAnswers() 
    }, 2000)
})