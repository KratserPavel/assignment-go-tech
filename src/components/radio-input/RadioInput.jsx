import React from 'react';

const RadioInput = ({options, name, onChange}) => {

    const optionsRendered = options.map(option => {
        const {label} = option

        return (
            <label key={name + label}>
                <input id={label}
                       value={label}
                       name={name}
                       onChange={e => onChange({
                           id: name,
                           state: e.target.value
                       })}
                       type="radio"/>
                {label}
            </label>
        )
    })

    return optionsRendered

}
export default RadioInput;