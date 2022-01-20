import React from 'react';
import { FormGroup } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


export default function FormTodo() {

    return (
        <>
            <FormGroup >
                <   TextField
                    variant="filled"
                    fullWidth
                    id="fullWidth"
                    size="small"
                    placeholder='Add a work please...'
                />
                <Button
                >
                    Add
                </Button>

            </FormGroup>
        </>
    );
}
