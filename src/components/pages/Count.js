import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Timer from '../Timer';


export default function Count(props) {


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
                           
                </Typography>
                <ul>
            {props.map((kids)=><Timer/>)}
        </ul>
            </Container>
        </Box>
    )
}