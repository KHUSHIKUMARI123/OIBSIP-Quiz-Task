const questions = [
    {
        question: " Q1: What is the capital of France?",
        options: [
            "London",
            "Paris",
            "Berlin",
            "Rome"
        ],
        answer: 1
    },
    {
        question: " Q2:What is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean"
        ],
        answer: 3
    },
	{
        question: " Q3:Which is the largest continent in the world?",
        options: [
            "Asia",
            "Africa",
            "Antartica",
            "Europe"
        ],
        answer: 0
     },
     {
        question: " Q4: Which International community Introduced the CSS?",
        options: [
         "World Wide Web Consortium",
         "HTML style community",
         "World Wide Web Committee",
        ],
        answer: 0
    },
    
    {
        question: " Q5: What does HTML stand for?",
        options: [
         "HYPERTEXT MARKUP LANGUAGE",
         "HYPERLINK MARKUP LANGUAGE",
         "HYPERTEXTS MARKUP LANGUAGE",
         "HYPERSET MARKUP LANGUAGE",
        ],
        answer: 0
    },
    {
        question: "Q6: What is the correct HTML element for inserting a line break?",
        options:[
         "break",
         "br",
         "hr",
          "b",
        ],
        answer: 1
    },
    {
        question: " Q7:Where does we write the &#60;title&#62; of a document?",
        options: [
         "inside h1",
         "inside heading",
         "inside body",
         "inside head",
        ],
        answer: 3
    },
    {
        question: "Q8: Can we nest 'ul' inside an 'ol' and vice-versa ?",
        options:[
         "True",
         "False",
        ],
        answer: 1
    },
    {
        question: "Q9: Is HTML an programming language?",
        options:[
         "True",
         "False",
        ],
        answer: 1
    },
    {
        question: " Q10: Does HTML run without CSS ?",
        options:[
         "Yes",
         "NO",
        "Maybe",
        ],
        answer: 0
    },
    {
        question: " Q11: What does HTML stand for?",
        options:[
         "using superscript",
         "using super",
         "using sup",
         "using s",
    ],
        answer: 2
},
{
    question: "Q12: Which International community Introduced the CSS?",
    options:[
     "Cascading Style Sheet",
     "Computer Style Sheet",
     "Commom Style Sheets",
     "Colorful Style Sheets",
],
    answer: 0
},
{
    question: "Q13: Does HTML run without CSS ?",
    options:[
     "Yes",
     "NO",
     "Maybe",
    ],
    answer: 0
},
{
    question: "Q14: Which International community Introduced the CSS?",
    options:[
     "Cascading Style Sheet",
     "Computer Style Sheet",
     "Commom Style Sheets",
     "Colorful Style Sheets",
],
    answer: 0
},
{
    question: "Q15: Which International community Introduced the CSS?",
    options:[
    "&#60;css&#62;  &#60;/css&#62;",
     "&#60;head&#62;  &#60/head&#62;",
     "&#60;script&#62;  &#60/script&#62;",
],
    answer: 1
},

    // Add more questions here
];

const resultContainer = document.querySelector('.result');
const questionContainer = document.querySelector('#question');
const optionContainer = document.querySelector('.option-container');
const evaluateBtn = document.querySelector('.evaluate');
const nextBtn = document.querySelector('.next');

let currentQuestion = 0;
let score = 0;

loadQuestion(currentQuestion);

evaluateBtn.addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.id[2] - 1;
        if (questions[currentQuestion].answer === answer) {
            score++;
        }
        selectedOption.checked = false;
        resultContainer.innerHTML = `Score: ${score}`;
    } else {
        alert("Please select an option");
    }
});

nextBtn.addEventListener('click', function () {
    currentQuestion++;
    if (currentQuestion === questions.length) {
        questionContainer.innerHTML = `Quiz Over! Your final score is ${score} out of ${questions.length}.`;
        optionContainer.innerHTML = '';
        evaluateBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        return;
    }
    loadQuestion(currentQuestion);
});

function loadQuestion(index) {
    const question = questions[index];
    questionContainer.innerHTML = question.question;
    optionContainer.innerHTML = '';
    for (let i = 0; i < question.options.length; i++) {
        optionContainer.innerHTML += `
            <input type="radio" name="option" id="op${i + 1}">
            <label for="op${i + 1}">${question.options[i]}</label><br>
        `;
    }
}
 