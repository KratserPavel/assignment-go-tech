import React from 'react';

const TextInput = ({ name }) => {
    return (
        <div>
            <input placeholder='Your answer' name={name}/>
        </div>
    );
};

export default TextInput;