import React from 'react';

const RadioInput = ({label, valueGetter, name}) => {
    // const changeRadioHandler = e => valueGetter(e.target.value)

    return (
        <div>
            <label>
                <input id={label}
                       value={label}
                       name={name}
                       type="radio"
                       // onChange={changeRadioHandler}
                    />
                {label}
            </label>
        </div>
    )
}
export default RadioInput;