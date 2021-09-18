import { REQUEST_QUESTIONS, RESET_ANSWERS, SET_ANSWER } from "./types";

const initState = {
  questions: [],
  answers: {},
};

export const formReducer = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return { ...state, questions: action.payload };

    case SET_ANSWER: {
      const { id, answer } = action.payload;
      const { answers } = state;

      return { ...state, answers: { ...answers, [id]: answer } };
    }

    case RESET_ANSWERS:
      return { ...state, answers: {} };

    default:
      return state;
  }
  return state;
};

export const getQuestions = (state) => state.form.questions;
export const getAnswers = (state) => state.form.answers;
