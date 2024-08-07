import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';


export default function Home(props) {
    return (
        <>
            <Container sx={{
                pt: 8,
                pb: 6,
            }}>

                <Typography
                    sx={{ border: 2, borderColor: 'primary.main'}}
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Announcements...
                </Typography>
            </Container>
            <Grid container spacing={2} sx={{ p: 4, bgcolor: "#ccbc94" }}>

                <Grid item xs={12} sm={12} md={6}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1, bgcolor: "#ccbc94" }}>
                            <Typography gutterBottom variant="h5" component="h1">
                                Season Wrap-Up
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
                            <Typography gutterBottom variant="h5" component="h1">
                                Pictures
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
                                Welcome Elk Plain 3rd and 4th graders!
                            </Typography>
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
