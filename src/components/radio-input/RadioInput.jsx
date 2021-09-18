import React from "react";
import { useDispatch } from "react-redux";
import { setAnswerAction } from "../../reducers/form/actions";

const RadioInput = ({ options, name }) => {
  const dispatch = useDispatch();

  const optionsRendered = options.map((option) => {
    const { label } = option;

    return (
      <label key={name + label}>
        <input
          id={label}
          value={label}
          name={name}
          type="radio"
          onChange={(e) => dispatch(setAnswerAction(name, e.target.value))}
        />
        {label}
      </label>
    );
  });

  return optionsRendered;
};
export default RadioInput;
