import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (input.trim() !== '') {
            dispatch(addTodo({
                text: input,
                id: new Date().getTime(),
            }));
            setInput('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default Input;
