import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import FormTodo from './components/FormTodo';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const HeaderStyled = styled('header')(
  {
    fontSize: 40,
    textAlign: 'center'
  });


function App() {

  return (
    <>

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'lightgrey', height: '100vh' }}>
          <div>
            <p
              style={{
                textAlign: 'center'
              }}
            >
              Make your own list of things to deal with
            </p>
            <br></br>
            <HeaderStyled>
              <FactCheckIcon></FactCheckIcon>
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
