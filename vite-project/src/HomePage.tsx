import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Button variant="contained" color="primary" onClick={handleNavigate}>
        Go to About Page
      </Button>
    </div>
  );
};

export default HomePage;
