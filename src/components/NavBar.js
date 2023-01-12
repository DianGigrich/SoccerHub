import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar(props) {
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
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab textColor="primary" value="Home" label="Home" onClick={() => navigate('/')} />

        <Tab textColor="primary" value="List" label="List" onClick={() => navigate('/List')} />

        <Tab textColor="primary" value="Resources" label="Resources" onClick={() => navigate('/Resources')} />
      </Tabs>
    </Box>

  )
}

