import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab} from '@mui/material/';


export default function Navbar() {
  const navigate = useNavigate()

  const [value, setValue] = React.useState('Home');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
    <Box sx={{ width: '100%' }}>
      <Tabs
        centered
        value={value}
        variant="fullWidth"
        onChange={handleTabChange}
        indicatorColor="primary"
        aria-label="secondary tabs"
        sx={{ border: 5 , borderColor: 'primary.main'}}
      >
        <Tab sx={{ color: "#000000"}}value="Home" label="Home" onClick={() => navigate('/')} />

        <Tab textColor="inherit" value="Games" label="Games" onClick={() => navigate('/Games')} />

        <Tab textColor="primary" value="Resources" label="Resources, Links" onClick={() => navigate('/Resources')} />
      </Tabs>
    </Box>

  )
}

