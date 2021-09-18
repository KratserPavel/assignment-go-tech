import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateForm } from "./utils";
import QuestionContainer from "../../components/question-container/QuestionContainer";
import { getAnswers, getQuestions } from "../../reducers/form/reducer";
import {
  fetchQuestionsAction,
  postAnswersAction,
} from "../../reducers/form/actions";

const QuestionnairePage = () => {
  const questions = useSelector(getQuestions);
  const answers = useSelector(getAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestionsAction());
  }, [dispatch]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm(questions, answers)) return;

    dispatch(postAnswersAction(answers));
    e.target.reset();
  };

  const questionsRendered = questions.length
    ? questions.map((question) => (
        <QuestionContainer key={question.id} question={question} />
      ))
    : "";

  return (
    <form onSubmit={onFormSubmit}>
      <div>{questionsRendered}</div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionnairePage;
