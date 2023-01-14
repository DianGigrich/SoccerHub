import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Rules from '../../assets/Rules.pdf';

export default function Home(props) {
    return (
        <Box sx={{
            pt: 8,
            pb: 6,
        }}
        >
            <Typography variant="h3">
                <Link color="inherit" href={Rules} underline="hover" target="_blank">Rules
                </Link>

            </Typography>

        </Box>
    )
}