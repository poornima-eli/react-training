import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from './actions';

const List = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default List;
