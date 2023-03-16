import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Timer from '../Timer';


export default function Count(props) {
    const kids = [  {
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
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Potatos
                           <Timer/>
                </Typography>
                
            {kids.map((kids)=><Typography>{kids.name}{kids.number}</Typography>)}
        
            </Container>
        </Box>
    )
}