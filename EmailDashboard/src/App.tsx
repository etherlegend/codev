// CoDev - A GPT 4.0 A GPT 4.0 Virtual Developer, by twitter.com/@etherlegend

import React from 'react';
import { Container } from '@mui/material';
import EmailList from './components/EmailList';

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <EmailList />
    </Container>
  );
};

export default App;
