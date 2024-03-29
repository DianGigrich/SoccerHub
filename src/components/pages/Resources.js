import React from 'react';
import { Box, Typography, Link, Container, CardMedia } from '@mui/material';
import Rules from '../../assets/Rules.pdf';
import Map from '../../assets/Map.pdf';
import Facility from '../../assets/Facility.jpg';

export default function Resources(props) {
    return (
        <Box sx={{
            pt: 8,
            pb: 6,
        }}
        >
            <Typography
                sx={{ border: 2, borderColor: 'primary.main'}}
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Resources
            </Typography>
            <Container>
                <Typography variant="h4" sx={{ p: 4, bgcolor: "#ccbc94" }}>
                    <Link sx={{ p: 4 }} color="inherit" href={Rules} underline="hover" target="_blank">Rules
                    </Link>
                </Typography>
                <Typography variant="h4" sx={{ p: 4, bgcolor: "#ccbc94" }}>
                    <Link sx={{ p: 4 }} color="inherit" href="https://bethelrec.org/schedule/412109/3rd4th-girls" underline="hover" target="_blank">Bethel Rec Soccer Games Website
                    </Link>
                </Typography>
                <Typography variant="h4" sx={{ p: 4, bgcolor: "#ccbc94" }}>
                    <Link sx={{ p: 4 }} color="inherit" href={Map} underline="hover" target="_blank">Facility Map
                    </Link>
                </Typography>

            </Container>
            <Container>
                <CardMedia
                    component="img"
                    height="auto"
                    image={Facility}
                    alt="facility map"
                />
            </Container>
        </Box>
    )
}