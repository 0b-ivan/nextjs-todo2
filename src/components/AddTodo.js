'use client'

// AddTodo.js
import React, { useState } from "react";

export const todoListData = [{ todoName: 'ich bin ein test', checked: false }];

export default function AddTodo() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(todoListData);
    
    const addTodo = () => {
        if(input.trim() === '') return;

        const newTodo = {todoName: input, checked: false};
        setTodos(prev => [...prev, newTodo]);
        setInput('');
        console.log('#################################');
        console.log(newTodo);
        console.log(todos);
    };

    return (
        <div style={{
           border: "2px solid green",
           padding: "1rem"
        }}>
            <input
                id="task_id"
                type="text"
                placeholder="Your todo"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <button onClick={addTodo} id="add_btn_id">Add your todo</button>
        </div>
    );
}
