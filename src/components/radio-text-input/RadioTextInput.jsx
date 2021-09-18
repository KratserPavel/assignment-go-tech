import React, {useState} from 'react';

const RadioTextInput = ({options, name, onChange}) => {
    const [inputValue, setInputValue] = useState('');
    const [isOtherSelected, setIsOtherSelected] = useState(false);

    const onRadioChangeHandler = (e) => {
        const {value} = e.target

        if (value === 'Other') {
            setIsOtherSelected(true)
            onChange({id: name, state: inputValue})
        } else {
            setIsOtherSelected(false)
            onChange({id: name, state: value})
        }
    }

    const onInputChangeHandler = (e) => {
        const {value} = e.target

        if (isOtherSelected) {
            onChange({id: name, state: value})
        }

        setInputValue(value)
    }

    const optionsRendered = options.map(option => {
        const {label, textInput} = option

        return (!textInput ?
                <label key={name + label}>
                    <input id={label}
                           value={label}
                           name={name}
                           onChange={onRadioChangeHandler}
                           type="radio"
                    />
                    {label}
                </label>
                :
                <label key={name + label}>
                    <input id={label}
                           value={label}
                           name={name}
                           onChange={onRadioChangeHandler}
                           type="radio"
                    />
                    {label}
                    <input name={name} value={inputValue} onChange={onInputChangeHandler}/>
                </label>
        )
    })

    return optionsRendered
}

export default RadioTextInput;