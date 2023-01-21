import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';


export default function Home(props) {
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
                    Announcements
                </Typography>
            </Container>
            <Grid container spacing={2} sx={{ p: 4, bgcolor: "#ccbc94" }}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card 
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Welcome
                            </Typography>
                            <Typography>
                                Here is our announcements page where we will keep you informed of... announcements!
                            </Typography>
                            <br />
                            <Typography>
                                This will include updates, news, games, etc.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                       A second anouncment to check Fitness
                                    </Typography>
                                    <Typography>
                                        More news.
                                    </Typography>
                                    <br/>
                                    <Typography>
                                        Ipsem lorem
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
            </Grid>
            

        </Box>
    )
}
