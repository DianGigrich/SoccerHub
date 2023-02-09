import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import Rules from '../../assets/Rules.pdf';

export default function Resources(props) {
    return (
        <Box sx={{
            pt: 8,
            pb: 6,
        }}
        >
            <Container>
                <Typography variant="h3" sx={{ p: 4, bgcolor: "#ccbc94" }}>
                    <Link sx={{ p: 4 }} color="inherit" href={Rules} underline="hover" target="_blank">Rules
                    </Link>
                </Typography>
                    <Typography variant="h3" sx={{ p: 4, bgcolor: "#ccbc94" }}>
                    <Link sx={{ p: 4 }} color="inherit" href="https://bethelrec.org/home" underline="hover" target="_blank">Bethel Rec website
                        </Link>
                    </Typography>

            </Container>
        </Box>
    )
}