import React from 'react';
import RadioInput from "../radio-input/RadioInput";
import RadioTextInput from "../radio-text-input/RadioTextInput";
import TextInput from "../text-input/TextInput";
import styles from "./question-container.module.css"

const QuestionContainer = ({question}) => {

    const {type, title, options, id, required} = question

    const containerRendered = () => {
        switch (type) {
            case "textInput": {
                return <TextInput name={id}/>
            }
            case "multiplyChoice": {
                return  <RadioInput options={options} name={id}/>
            }
            case "multiplyChoiceWithOther": {
               return <RadioTextInput options={options} name={id}/>
            }
            default:
                return;
        }
    }

    return (
        <div className={styles['questionContainer']}>
            <div className={styles['questionContainerTitle']}><h3>{title}</h3>{required ? '*' : ''}</div>
            {containerRendered()}
        </div>
    )
}

export default QuestionContainer;