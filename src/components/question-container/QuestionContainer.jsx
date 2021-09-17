import React, {useState} from 'react';
import RadioInput from "../radio-input/RadioInput";
import RadioTextInput from "../radio-text-input/RadioTextInput";
import TextInput from "../text-input/TextInput";
import styles from "./question-container.module.css"

const QuestionContainer = ({question, valueGetter}) => {
    const {type, title, options, id, required} = question

    // const onChangeValue = value => {
    //     const answer = {
    //         id,
    //         value
    //     }
    //     valueGetter(answer)
    // }

    const containerRendered = () => {
        switch (type) {
            case "textInput": {
                return <TextInput
                    // onChangeValue={onChangeValue}
                    name={id}/>
            }
            case "multiplyChoice": {
                const optionsRendered = options.map(option => {
                    const {label, textInput} = option

                    return textInput ?
                        <RadioTextInput key={id + label}
                                        label={label}
                                        // valueGetter={onChangeValue}
                                        name={id}/>
                        :
                        <RadioInput key={id + label}
                                    label={label}
                                    // valueGetter={onChangeValue}
                                    name={id}/>
                })

                return <>{optionsRendered}</>
            }
            default:
                return '';
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