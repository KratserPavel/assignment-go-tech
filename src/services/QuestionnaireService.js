const QUESTIONS_GET_URL = 'http://localhost:3000/questions'
const ANSWERS_POST_URL = 'http://localhost:3000/answers/'


export const getAllQuestions = () => {
    return fetch(QUESTIONS_GET_URL, {
        method: "GET"
    }).then(response => response.json())
}

export const postAllAnswers = (answers) => {

    const requests = []

    answers.forEach(answer => {
        requests.push(fetch(ANSWERS_POST_URL, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(answer)
        }))
    })

    Promise.all(requests).then((responses) => {
        responses.forEach(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
        })
    }).then(() => alert('All answers were saved!'))
        .catch(e => alert(e))
}