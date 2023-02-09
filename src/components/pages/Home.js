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
                                Welcome Elk Plain 3rd and 4th graders!
                            </Typography>
                            <Typography>
                                Practices are Tuesday/Wednesday 6-7pm at Elk Plain.
                            </Typography>
                            <br />
                            <Typography>
                                Head Coach: &ensp; Tony Hamilton &emsp; (253)224-0653
                            </Typography>
                            <Typography>
                                Assistant Coach: &ensp; Dian Gigrich &emsp; (253)241-1773 (it's pronounced Diane)
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
                                Custom Names for Jerseys Coming Soon
                            </Typography>
                            <Typography>
                                We think it's cool, so we're doing it. <br /> Please text your information to asst coach/treasurer Dian.
                            </Typography>
                            <br />
                            <Typography>
                                Information needed: "Child's First Name" and "Requested Name for Jersey".
                                <br /> &ensp;No message received = Child's First Name
                            </Typography>
                            <br />
                            <Typography>
                                Sizes were already pre-determined by the form you filled out for BethelRec.
                            </Typography>
                            <br />
                            <Typography>
                                $5 to Dian with Paypal, Venmo, and Cash accepted. When the time comes around I will go into further detail.
                                <br /> If you can't afford it we'll cover the cost. We want every kid to be included!
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>


        </Box>
    )
}
