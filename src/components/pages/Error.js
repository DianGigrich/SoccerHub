import React from 'react';
import { Box, Typography, Container } from '@mui/material';


export default function Error() {
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
                    className="welcome"
                    
                >
                    404 site not found
                </Typography>
            </Container>
        </Box>
    )
}