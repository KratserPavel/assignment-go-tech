import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers } from "../../reducers/form/reducer";
import { setAnswerAction } from "../../reducers/form/actions";

const TextInput = ({ name }) => {
  const answers = useSelector(getAnswers);
  const dispatch = useDispatch();

  return (
    <input
      placeholder="Your answer"
      value={answers[name]}
      onChange={(e) => dispatch(setAnswerAction(name, e.target.value))}
    />
  );
};

export default TextInput;
