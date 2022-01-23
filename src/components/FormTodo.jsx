import React from 'react';
import TodoList from './TodoList';
import { FormGroup } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState, useCallback, useEffect } from 'react';


export default function FormTodo() {
    const TODO_APP_STORAGE_KEY = "TODO_APP";
    const [textInput, setTextInput] = useState('');
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        const storageofTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
        if (storageofTodoList) {
            setTodoList(JSON.parse(storageofTodoList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
    }, [todoList]);



    const onSubmit = useCallback(
        (e) => {
            setTodoList([
                { id: new Date().valueOf(), name: textInput, isCompleted: false },
                ...todoList,
            ]);
            //console.log('user entered: ' + textInput);
            setTextInput("");
        },
        [textInput, todoList]

    );
    function toggleComplete(id) {
        setTodoList(
            todoList.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodoList(todoList.filter(todo => todo.id !== id));
    }

    return (
        <>
            <FormGroup>
                <TextField
                    variant="filled"
                    fullWidth
                    id="fullWidth"
                    size="small"
                    placeholder='Add a work please...'
                    value={textInput}
                    onChange={(event) => setTextInput(event.target.value)}
                />
                <Button
                    variant='contained'
                    onClick={onSubmit}
                    disabled={!textInput}
                >
                    Add
                </Button>
            </FormGroup>
            <TodoList todoList={todoList} removeTodo={removeTodo} toggleComplete={toggleComplete} />

        </>
    );
}
