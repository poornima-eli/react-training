import React from 'react';
import TodoInput from '../redux/todoInput';
import TodoList from '../redux/todoList';

const Todo = () => {
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input-container">
                <TodoInput/>
            </div>
            <TodoList/>
        </div>
    );
};

export default Todo;
