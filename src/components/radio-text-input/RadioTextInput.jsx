import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswerAction } from "../../reducers/form/actions";
import { getAnswers } from "../../reducers/form/reducer";

const RadioTextInput = ({ options, name }) => {
  const [inputValue, setInputValue] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const answers = useSelector(getAnswers);
  const dispatch = useDispatch();

  const onRadioChangeHandler = (e) => {
    const { value } = e.target;

    if (value === "Other") {
      setIsOtherSelected(true);
      dispatch(setAnswerAction(name, inputValue));
    } else {
      setIsOtherSelected(false);
      dispatch(setAnswerAction(name, value));
    }
  };

  const onInputChangeHandler = (e) => {
    const { value } = e.target;

    if (isOtherSelected) {
      dispatch(setAnswerAction(name, value));
    }

    setInputValue(value);
  };

  const optionsRendered = options.map((option) => {
    const { label, textInput } = option;

    return !textInput ? (
      <label key={name + label}>
        <input
          id={label}
          value={label}
          name={name}
          onChange={onRadioChangeHandler}
          type="radio"
        />
        {label}
      </label>
    ) : (
      <label key={name + label}>
        <input
          id={label}
          value={label}
          name={name}
          onChange={onRadioChangeHandler}
          type="radio"
        />
        {label + ":"}
        <input
          name={name}
          value={answers[name] ? inputValue : ""}
          disabled={!isOtherSelected}
          onChange={onInputChangeHandler}
        />
      </label>
    );
  });

  return optionsRendered;
};

export default RadioTextInput;
