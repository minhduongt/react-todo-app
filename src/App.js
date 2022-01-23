import './App.css';
//import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import FormTodo from './components/FormTodo';

const HeaderStyled = styled('header')(
  {
    fontSize: 40,
    textAlign: 'center'
  });


function App() {

  //const [name, setName] = useState('');

  // function changeUserName(e) {
  //   setName({ name: e.target.value });
  // }

  // function displayChangeName() {
  //   document.getElementById('nameTextField').style.display = "block"
  // }



  return (
    <>

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'lightgrey', height: '100vh' }}>
          <div>
            <h3>
              Welcome, Guest
              <Button

                style={{
                  float: 'right'
                }}
              >Change Name
              </Button>
              <TextField
                id='nameTextField'
                size='small'
                placeholder='Enter your name'
                style={{
                  float: 'right',
                  display: 'none'

                }}
              >
              </TextField>
            </h3>

            <br></br>
            <HeaderStyled>
              Todo List
            </HeaderStyled>
            <FormTodo />
          </div>
        </Box>
      </Container>

    </>
  );
}

export default App;
