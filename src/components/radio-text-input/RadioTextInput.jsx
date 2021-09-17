import React, {useState} from 'react';

const RadioTextInput = ({label, valueGetter, name}) => {
    const [inputValue, setInputValue] = useState('')

    // const onChangeRadioHandler = () => valueGetter(inputValue)
    const onChangeInputHandler = e => setInputValue(e.target.value)

    return (
        <div>
            <label>
                <input id={label}
                       value={label}
                       name={name}
                       type="radio"
                       // onChange={onChangeRadioHandler}
                />
                {label}
            </label>
            <input name={name} value={inputValue} onChange={onChangeInputHandler}/>
        </div>
    );
};

export default RadioTextInput;