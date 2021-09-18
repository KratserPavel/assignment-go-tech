import React from 'react';
import RadioInput from "../radio-input/RadioInput";
import RadioTextInput from "../radio-text-input/RadioTextInput";
import TextInput from "../text-input/TextInput";
import styles from "./question-container.module.css"

const QuestionContainer = ({question, onChange, value}) => {

    const {type, title, options, id, required} = question

    const containerRendered = () => {
        switch (type) {
            case "textInput": {
                return <TextInput name={id} onChange={onChange} value={value}/>
            }
            case "multiplyChoice": {
                return  <RadioInput options={options} name={id} onChange={onChange}/>
            }
            case "multiplyChoiceWithOther": {
               return <RadioTextInput options={options} name={id} onChange={onChange}/>
            }
            default:
                return;
        }
    }

    return (
        <div className={`container ${styles['questionContainer']}`}>
            <div className={styles['questionContainerTitle']}><h3>{title}</h3>{required ? '*' : ''}</div>
            {containerRendered()}
        </div>
    )
}

export default QuestionContainer;