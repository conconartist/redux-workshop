import React from 'react';

const ToDo = ({ id, text, completed }) => {
    return (
        <li id={id}>{text}</li>
    )
}

export default ToDo;