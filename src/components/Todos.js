'use client'



import React from "react";
import Todo from "@/components/Todo";
import { todoListData } from "@/components/AddTodo";

export default function Todos() {
    return (
        <div style={{ border: "2px solid blue" }}>
            <h1>Das sind meine Todo</h1>
            <div>
                {todoListData.map((todo, index) => (
                    <li key={index}>
                        <span>{todo.todoName}</span>
                    </li>
                ))}
            </div>
        </div>
    );
}
