import React, {useEffect, useState} from 'react';
import * as questionnaireService from "../../services/QuestionnaireService";
import {validateForm} from "./utils";
import QuestionContainer from "../../components/question-container/QuestionContainer";

const QuestionnairePage = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        questionnaireService.getAllQuestions()
            .then(questions => {
                setQuestions(questions)
                setAnswers(questions.reduce((res, question) => ({...res, [question.id]: ''}), {}))
            })
    }, [])

    const onFormSubmit = (e) => {
        e.preventDefault()

        if (!validateForm(questions, answers)) return;

        const request = Object.keys(answers).map(key => ({id: key, answer: answers[key]}))

        questionnaireService.postAllAnswers(request);

        e.target.reset()
    }

    const onChangeHandler = value => setAnswers({...answers, [value.id]: value.state})

    const questionsRendered = questions.length ?
        questions.map(question => <QuestionContainer key={question.id}
                                                     onChange={onChangeHandler}
                                                     value={answers[question.id]}
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