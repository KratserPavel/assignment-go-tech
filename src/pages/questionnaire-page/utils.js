export const validateForm = (questions, answers) => {
    for (let question of questions) {
        if (question.required && !answers[question.id]) {
            alert('Fill all required fields')
            return false
        }
    }
    return true
}