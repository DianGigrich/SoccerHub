import * as React from 'react';
import { Box, Container, Typography, Link} from '@mui/material/';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
       <Link color="inherit" href="https://github.com/DianGigrich/SoccerHub/">
       SoccerHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter({props}) {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
 
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          position:"fixed",
          bottom:0
          
        }}
      >
        <Container maxWidth="sm">
          <Typography  variant="body1" gutterBottom>
            Hi Guys! Dian is the author, excuse me(Dian) if I(Dian) slips up with an "I" somewhere.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
