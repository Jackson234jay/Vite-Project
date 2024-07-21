import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Welcome to Employers Management
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
};

export default App;
