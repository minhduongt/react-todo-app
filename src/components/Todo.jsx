import React from 'react';
import { Checkbox, Container, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';

const IconButtonStyled = styled(IconButton)(
    {
        float: 'right',

    });

export default function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <Container>
            <div
                style={{
                    textDecoration: todo.isCompleted ? "line-through" : null,
                    backgroundColor: todo.isCompleted ? "lightgreen" : null
                }}>
                <Checkbox
                    checked={todo.isCompleted}
                    onClick={handleCheckboxClick}
                    color="success"
                />
                {todo.name}
                <IconButtonStyled
                    aria-label="delete"
                    size="medium"
                    onClick={handleRemoveClick}
                >
                    <DeleteIcon />
                </IconButtonStyled>
            </div>
        </Container >
    );
}
