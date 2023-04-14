import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Link } from '@mui/material';


export default function Home(props) {
    return (
        <>
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
                            <Typography gutterBottom variant="h5" component="h1">
                                Season Wrap-Up
                            </Typography>
                            <Typography>
                                Last game: Saturday BHS 8 @ 10:15am
                            </Typography>
                            <Typography variant="h6">
                                Godfather Pizza Party
                            </Typography>
                            <Typography>
                                15709 Pacific Ave S, Tacoma, WA 98444
                                <br />
                                <Link href="https://www.google.com/maps/dir/47.1149994,-122.3578827/godfather's+pizza/@47.1192827,-122.4312808,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x549103ba8cdc7aa3:0xa9fe0022c9480be7!2m2!1d-122.4343099!2d47.114493" target="_blank">Directions</Link>
                            </Typography>
                            <Typography>
                                Certificates and Trophies awarded at party!
                                <br/> Will Coach be in a dress? Better win the game!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h1">
                                Pictures
                            </Typography>
                            <Typography>
                                Coach picks up pictures sometime around April 11th.  The pictures are online available to order. Currently trying to figure this out as of 4/14
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
                                Welcome Elk Plain 3rd and 4th graders!
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Practices are  Tuesday/Thursday 5-6pm at Elk Plain.
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
                        <CardContent sx={{ flexGrow: 1, bgcolor: "#ccbc94" }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Practice Cancellations due to School Events
                            </Typography>
                            <Typography>
                                ~COMPLETE~
                            </Typography>
                        </CardContent>
                        <CardContent sx={{ flexGrow: 1, bgcolor: "#ccbc94" }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Team Pictures
                            </Typography>
                            <Typography>
                                ~COMPLETE~
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1, bgcolor: "#ccbc94" }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                First Game This Saturday!
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Great Job on our first game!
                            </Typography>
                            <Typography>
                                ~COMPLETE~
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1, bgcolor: "#ccbc94" }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                First Practice Week
                            </Typography>
                            <Typography>
                                ~COMPLETE~
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1, bgcolor: "#ccbc94" }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Custom Names for Jerseys!
                            </Typography>
                            <Typography>
                                ~COMPLETE~
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </>
    )
}
