import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { fontSize, styled } from '@mui/system';
import FormTodo from './components/FormTodo';
import FormTodoList from './components/FormTodoList';

const HeaderStyled = styled('header')(
  {
    fontSize: 40,
    textAlign: 'center'
  });


function App() {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'lightgrey', height: '100vh' }}>
          <div>
            <h3>Welcome, Guest</h3>
            <HeaderStyled>
              Todo List
            </HeaderStyled>
            <FormTodo />
            <FormTodoList />
          </div>
        </Box>
      </Container>

    </>
  );
}

export default App;
