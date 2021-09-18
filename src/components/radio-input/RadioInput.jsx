import React from 'react';

const RadioInput = ({options, name}) => {

    const optionsRendered = options.map(option => {
        const {label} = option

        return (
            <label>
                <input id={label}
                       value={label}
                       name={name}
                       type="radio"/>
                {label}
            </label>
        )
    })

    return (
        <div>
            {optionsRendered}
        </div>
    )
}
export default RadioInput;