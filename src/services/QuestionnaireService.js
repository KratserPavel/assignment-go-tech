const QUESTIONS_GET_URL = 'http://localhost:3000/questions'
const ANSWERS_POST_URL = 'http://localhost:3000/answers'


export const getAllQuestions = () => {
    return fetch(QUESTIONS_GET_URL, {
        method: "GET"
    }).then(response => response.json())
}

export const postAllAnswers = (answers) => {
    console.log(Array.isArray(answers))
    return fetch(ANSWERS_POST_URL, {
        method: "POST",
        body: answers,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}