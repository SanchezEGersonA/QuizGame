// CSS
import './styles.css'

// JS
import { getCategories, getQuestionsByCategory } from "./components/server-api";
import { _ } from './components/underscore-min';

// html references
const section = document.querySelector('section');
let selectCategory;

// Global variable
let answerJson = {};

const createFieldCategory = () => {

    const html = `
        <div class="quiz-category">
            <label for="category">Category</label>
        </div>
    `;
    section.innerHTML = html;

    const sectionDiv = document.querySelector('.quiz-category');

    selectCategory = document.createElement('select');
    selectCategory.name = "category";
    const optionCategory = document.createElement('option');
    optionCategory.value = '0';
    optionCategory.innerText = "";
    selectCategory.appendChild(optionCategory);
    getCategories()
        .then((categoryList) => {
            const categoryKeys = Object.keys(categoryList);
            for (const index in categoryKeys) {
                let newCategory = document.createElement('option');
                newCategory.value = categoryKeys[index];
                newCategory.innerText = categoryKeys[index];
                selectCategory.appendChild(newCategory);
            }
        })
        .catch(console.error);

    sectionDiv.appendChild(selectCategory);

}

/**
 * Function to get the selected category by the user and
 * build the body of the questions
 * @param {DOM} paramElement - Select element
 */
const categoryEvent = (paramElement) => {

    paramElement.addEventListener('change', () => {

        const currentCategory = paramElement.value;
        if (currentCategory && currentCategory !== "" && currentCategory !== null) {

            paramElement.disabled = true;
            const quizSlideDiv = document.createElement('div');
            quizSlideDiv.classList.add('quiz-slide');

            getQuestionsByCategory(currentCategory)
                .then((questionList) => {
                    for (const index in questionList) {
                        let quizBodyDiv = document.createElement('div');
                        quizBodyDiv.classList.add('quiz-body');

                        let quizQuestionDiv = document.createElement('div');
                        quizQuestionDiv.classList.add('quiz-question');
                        quizQuestionDiv.id = `q${Number(index) + 1}`;
                        quizQuestionDiv.innerHTML = `<p>${questionList[index].question}</p>`

                        let quizAnswersDiv = document.createElement('div');
                        quizAnswersDiv.classList.add('quiz-answers');
                        quizAnswersDiv.id = `a${Number(index) + 1}`;
                        let optionArray = questionList[index].incorrectAnswers;
                        optionArray.push(questionList[index].correctAnswer);
                        optionArray = _.shuffle(optionArray);
                        optionArray.map((option) => {
                            let optionRadio = document.createElement('input');
                            optionRadio.type = 'radio';
                            optionRadio.name = `Question${Number(index) + 1}`;
                            optionRadio.id = `Question${Number(index) + 1}`;
                            optionRadio.value = option;
                            let optionLabel = document.createElement('label');
                            optionLabel.setAttribute('for', `Question${Number(index) + 1}`);
                            optionLabel.innerText = option;
                            let optionBr = document.createElement('br');
                            quizAnswersDiv.appendChild(optionRadio);
                            quizAnswersDiv.appendChild(optionLabel);
                            quizAnswersDiv.appendChild(optionBr);
                        });

                        quizBodyDiv.appendChild(quizQuestionDiv);
                        quizBodyDiv.appendChild(quizAnswersDiv);

                        quizSlideDiv.appendChild(quizBodyDiv);

                        answerJson[`Question${Number(index) + 1}`] = {
                            question: questionList[index].question,
                            answer: questionList[index].correctAnswer
                        };
                    }
                    let quizButtonDiv = document.createElement('div');
                    quizButtonDiv.classList.add('quiz-button');

                    let nextButton = document.createElement('button');
                    nextButton.classList.add('next-button');
                    nextButton.innerHTML = 'Next &#10095;';

                    quizButtonDiv.appendChild(nextButton);
                    quizSlideDiv.appendChild(quizButtonDiv);
                    section.appendChild(quizSlideDiv);

                    nextQuestion(nextButton);
                })
                .catch(console.error);

        }

    });

}

/**
 * Function to get functionality to the slide of quetions
 * @param {DOM} paramElement - Button element
 */
let questionCount = 1;
const nextQuestion = (paramElement) => {
    paramElement.addEventListener('click', () => {
        const bodyQuestions = document.querySelectorAll('.quiz-body');
        if (questionCount !== bodyQuestions.length) {

            bodyQuestions[questionCount - 1].style.display = 'none';
            bodyQuestions[questionCount].style.display = 'flex';

            getUserAnswers(questionCount);

            questionCount += 1;

        } else {

            const nextButton = document.querySelector('.next-button');
            nextButton.disabled = true;
            nextButton.style.display = 'none';

            const quizButtonDiv = document.querySelector('.quiz-button');
            const submitButton = document.createElement('button');
            submitButton.innerText = 'Submit';
            submitButton.classList.add('submit-button');
            quizButtonDiv.appendChild(submitButton);

            getUserAnswers(questionCount);
            userResult(submitButton);

        }
    });
}

/**
 * Function to get the answes of the user and compare if it correct
 * @param {Number} paramBodySlide - Number of current the slide
 */
const getUserAnswers = (paramBodySlide) => {

    const radioButtons = document.querySelectorAll(`#Question${paramBodySlide}`);
    let flag = false;
    let userAnswer = "";
    for (const elem of radioButtons) {
        if (elem.checked) {
            userAnswer = elem.value;
            if (answerJson[`Question${paramBodySlide}`].answer === userAnswer) {
                flag = true;
            }
            break;
        }
    }
    answerJson[`Question${paramBodySlide}`]["userAnswer"] = userAnswer;
    answerJson[`Question${paramBodySlide}`]["isCorrect"] = flag;

}
/**
 * Function to show the results of the quiz game
 * @param {DOM} paramSubmitButton - Button
 */
const userResult = (paramSubmitButton) => {
    paramSubmitButton.addEventListener('click', () => {

        const bodyQuestions = document.querySelectorAll('.quiz-body');
        bodyQuestions[questionCount - 1].style.display = 'none';
        paramSubmitButton.disabled = true;
        paramSubmitButton.style.display = 'none';

        const quizSlideDiv = document.querySelector('.quiz-slide');

        const quizResultDiv = document.createElement('div');
        quizResultDiv.classList.add('quiz-result');

        const quizResultTable = document.createElement('table');
        quizResultTable.innerHTML = `
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Question</th>
                    <th>Correct Answer</th>
                    <th>User Answer</th>
                </tr>
            </thead>    
        `;
        let count = 0;
        const tableBody = document.createElement('tbody');
        for (const key in answerJson) {
            count += 1;

            const tableRow = document.createElement('tr');
            if (answerJson[key].isCorrect) {
                tableRow.classList.add('correct');
            } else {
                tableRow.classList.add('incorrect');
            }

            const tableData1 = document.createElement('td');
            tableData1.innerText = count;

            const tableData2 = document.createElement('td');
            tableData2.innerText = answerJson[key].question;

            const tableData3 = document.createElement('td');
            tableData3.innerText = answerJson[key].answer;

            const tableData4 = document.createElement('td');
            tableData4.innerText = answerJson[key].userAnswer;

            tableRow.appendChild(tableData1);
            tableRow.appendChild(tableData2);
            tableRow.appendChild(tableData3);
            tableRow.appendChild(tableData4);

            tableBody.appendChild(tableRow);

            console.log(answerJson[key]);
        }

        quizResultTable.appendChild(tableBody);
        quizResultDiv.appendChild(quizResultTable);
        quizSlideDiv.appendChild(quizResultDiv);

        const quizAgainDiv = document.createElement('div');
        quizAgainDiv.classList.add('quiz-again');

        const againButton = document.createElement('a');
        againButton.classList.add('again-button');
        againButton.innerText = "Try Again";
        againButton.setAttribute('href', './index.html');

        quizAgainDiv.appendChild(againButton);
        quizSlideDiv.appendChild(quizAgainDiv);

    });
}

const init = () => {
    createFieldCategory();
    categoryEvent(selectCategory);
}

init();
