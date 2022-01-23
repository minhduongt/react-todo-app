import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, removeTodo, toggleComplete }) {
    return (
        <>
            {todoList.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </>
    );
}