import React from 'react';
import TextField from '@mui/material/TextField';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About Page</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
    </div>
  );
};

export default AboutPage;
