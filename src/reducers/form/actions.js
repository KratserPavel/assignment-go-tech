import {REQUEST_QUESTIONS, RESET_ANSWERS, SET_ANSWER} from "./types";

const QUESTIONS_GET_URL = 'http://localhost:3000/questions'
const ANSWERS_POST_URL = 'http://localhost:3000/answers/'

export const fetchQuestionsAction = () => (dispatch) => {
    return fetch(QUESTIONS_GET_URL, {
        method: "GET"
    })
        .then(response => response.json())
        .then(questions => {
            dispatch({
                type: REQUEST_QUESTIONS,
                payload: questions
            });
            return questions
        })
}

export const setAnswerAction = (id, answer) => ({
    type: SET_ANSWER,
    payload: {
        id,
        answer
    }
})


export const postAnswersAction = (answers) => (dispatch) => {
    const requests = []

    // Object was used in order to increase accessing into particular value for the sake of state's managing
    // In order to post answers properly it is mutating into array of [{id, answer}] representation
    answers = Object.keys(answers).map(key => ({id: key, answer: answers[key]}))

    answers.forEach(answer => {
        requests.push(fetch(ANSWERS_POST_URL, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(answer)
        }))
    })

    Promise.all(requests)
        .then((responses) => {
            responses.forEach(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
            })
        })
        .then(() => alert('All answers were saved!'))
        .catch(e => alert(e))
        .finally(() => dispatch(resetAnswersAction()))
}

export const resetAnswersAction = () => {
    return {
        type: RESET_ANSWERS
    }
}