import React from 'react';

const TextInput = ({name, onChange, value}) => {

    return <input placeholder='Your answer'
                  value={value}
                  onChange={e => onChange({
                      id: name,
                      state: e.target.value
                  })}/>
};

export default TextInput;