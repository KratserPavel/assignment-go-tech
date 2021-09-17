import React, {useEffect, useState} from 'react';
import * as questionnaireService from "../../services/QuestionnaireService";
import QuestionContainer from "../../components/question-container/QuestionContainer";

const QuestionnairePage = () => {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        questionnaireService.getAllQuestions()
            .then(questions => setQuestions(questions))
    }, [])

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const res = []
        for (let question of questions) {
            const id = question.id
            let answer = formData.getAll(id)

            if (answer.length > 1 && answer[0] === 'Other') {
                answer = answer[1]
            } else {
                answer = answer[0]
            }

            if (question.required && !formData.get(question.id)) {
                alert('fill all required fields')
                return
            }

            res.push({
                id,
                answer
            })

        }

        // console.log(res)

        // if (!validateAnswers) {
        //     alert('fill all required fields')
        //     return;
        // }
        // questionnaireService.postAllAnswers(answers)
        //     .then(res => alert(res))

    }

    const validateAnswers = answers => {
        // if (answers.length !== questions.length) {
        //     return false;
        // }
        // for (let i = 0; i < answers.length; i++) {
        //    if((questions[i].id === answers[i].id) && questions[i].required && !answers[i].value) {
        //        return false;
        //    }
        //
        // }
        return true;
    }

    const getAnswerHandler = (answer) => {
        // const index = answers.findIndex(a => a.id === answer.id);
        //
        // if (index !== -1) {
        //     answers[index] = answer
        //     setAnswers([...answers])
        // } else {
        //     setAnswers([...answers, answer])
        // }

        // console.log(answers)
    }

    const questionsRendered = questions.length ?
        questions.map(question => <QuestionContainer key={question.id}
                                                     question={question}
                                                     valueGetter={getAnswerHandler}/>) : ''

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                {questionsRendered}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default QuestionnairePage;