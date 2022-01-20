import React from 'react';
import FormTodo from './FormTodo';
import { Checkbox, Container, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';

const IconButtonStyled = styled(IconButton)(
    {
        float: 'right',

    });

export default function FormTodoList() {

    return (
        <Container>
            <div>
                <Checkbox
                    defaultValue='false'
                    color="success" />
                Do homework
                <IconButtonStyled
                    aria-label="delete"
                    size="medium">
                    <DeleteIcon />
                </IconButtonStyled>
            </div>
            <div>
                <Checkbox
                    defaultValue='false'
                    color="success" />
                Watch movie
                <IconButtonStyled
                    aria-label="delete"
                    size="medium">
                    <DeleteIcon />
                </IconButtonStyled>
            </div>
            <div>
                <Checkbox
                    defaultValue='false'
                    color="success" />
                Play a game
                <IconButtonStyled
                    aria-label="delete"
                    size="medium">
                    <DeleteIcon />
                </IconButtonStyled>
            </div>
        </Container>
    );
}
