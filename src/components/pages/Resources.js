import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Home() {
    return (
        <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
        }}
        >
            <Typography>
                A place to put links to everything, such as maps, soccer rules, etc.
                </Typography>

        </Box>
    )
}