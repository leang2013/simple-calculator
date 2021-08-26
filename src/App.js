import React from 'react';
import { Container } from '@material-ui/core';
import Routing from './routes';
import './styles/index.css';

const App = () => (
  <>
    <Container fixed>
      <Routing />
    </Container>
  </>
);

export default App;
