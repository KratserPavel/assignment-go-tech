import React from 'react';

const RadioTextInput = ({options, name}) => {

    const optionsRendered = options.map(option => {
        const {label, textInput} = option

        return (!textInput ?
                <label>
                    <input id={label}
                           value={label}
                           name={name}
                           type="radio"
                    />
                    {label}
                </label>
                :
                <label>
                    <input id={label}
                           value={label}
                           name={name}
                           type="radio"
                    />
                    {label}
                    <input name={name}/>
                </label>
        )
    })

    return (
        <div>
            {optionsRendered}
        </div>
    )
}

export default RadioTextInput;