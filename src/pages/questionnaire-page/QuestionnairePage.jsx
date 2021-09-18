import React, {useEffect, useState} from 'react';
import * as questionnaireService from "../../services/QuestionnaireService";
import QuestionContainer from "../../components/question-container/QuestionContainer";

const QuestionnairePage = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        questionnaireService.getAllQuestions()
            .then(questions => setQuestions(questions))
    }, [])

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const res = []
        for (let question of questions) {
            const {id, options} = question
            let answer = formData.getAll(id)

            // if statements describe the case of radio & text inputs in line
            if (answer.length > 1 && answer[0] === 'Other') {
                answer = answer[1]
            } else if (answer.length > 1 && answer[0] !== 'Other') {
                answer = answer[0]
            } else if (answer.length === 1 && answer[0] === 'Other') {
                alert('fill all required fields')
                return;
            } else if(answer.length === 1 && options && !options.some(o => o.label === answer[0])){
                alert('fill all required fields')
                return;
            }

            if (question.required && !answer) {
                alert('fill all required fields')
                return
            }

            res.push({id, answer})
        }
        questionnaireService.postAllAnswers(res).then((res) => console.log(res))

    }

    const questionsRendered = questions.length ?
        questions.map(question => <QuestionContainer key={question.id}
                                                     question={question}/>) : ''

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