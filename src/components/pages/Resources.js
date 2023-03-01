import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import Rules from '../../assets/Rules.pdf';
import Map from '../../assets/Map.pdf';
import Practice from '../../assets/Practice.pdf';



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
                    <Typography variant="h3" sx={{ p: 4, bgcolor: "#ccbc94" }}>
                    <Link sx={{ p: 4 }} color="inherit" href={Map} underline="hover" target="_blank">Facility Map
                        </Link>
                    </Typography>
                    <Typography variant="h3" sx={{ p: 4, bgcolor: "#ccbc94" }}>
                    <Link sx={{ p: 4 }} color="inherit" href={Practice} underline="hover" target="_blank">Practice Game Schedule
                        </Link>
                    </Typography>

            </Container>
        </Box>
    )
}