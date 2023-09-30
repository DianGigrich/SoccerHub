import React from 'react';
import { Box, Typography, Container, Card, Grid } from '@mui/material';
import Timer from '../Timer';


export default function Count(props) {
  const kids = [{
    name: "Leah",
    number: 1
  },
  {
    name: "Ava",
    number: 2
  },
  {
    name: "Dakota",
    number: 3
  },
  {
    name: "Arya",
    number: 4
  },
  {
    name: "Sofia",
    number: 5
  },
  {
    name: "Leona",
    number: 6
  },
  {
    name: "Makenna",
    number: 7
  },
  {
    name: "Ahmiyah",
    number: 8
  },
  {
    name: "Emrie",
    number: 9
  },
  {
    name: "Kessa",
    number: 10
  },
  {
    name: "Charlotte",
    number: 11
  },
  {
    name: "Zoey",
    number: 12
  }
  ]

  return (
    <Box sx={{
      pt: 8,
      pb: 6,
    }}
    >
      <Container>
        <Typography
          sx={{ border: 2, borderColor: 'primary.main'}}
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          In-Game Timers
        </Typography>
        <Grid container spacing={2} sx={{ p: 4, bgcolor: "#ccbc94" }}>
          {kids.map((kids) => <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" sx={{ p: 1, border: "3px solid"}}><strong>{kids.name} &emsp; {kids.number}</strong>
                <Timer/>
              </Typography>
            </Card>
          </Grid>)}
        </Grid>
      </Container>
    </Box>
  )
}