import React from 'react';
import { Button, Typography, Container } from '@mui/material';



const App: React.FC = () => 
  {
  return (
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Welcome to Employers Management
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>import React from 'react';

const App: React.FC = () => {
  const cmsId = import.meta.env.VITE_CMS_ID;

  return (
    <div>
      <h1>Welcome to the Vite App</h1>
      <p>CMS ID: {cmsId}</p>
    </div>
  );
};

export default App;

    </Container>
  );
};

export default App;
