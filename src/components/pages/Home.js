import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, List, ListItem } from '@mui/material';


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
                                First Game This Saturday!
                            </Typography>
                            <Typography variant="h5" component="h2">
                            3/11, 2 pm, BHS 8
                            </Typography>
                            <br />
                            <Typography>
                                 Reminders - No Jewelry, No Dogs. Wear SHIN GUARDS! 
                            </Typography>
                            <Typography>
                               Parent/Guardians: It's ALWAYS windy on the game fields, so prepare thyselves.
                            </Typography>
                            <br />
                            <Typography>
                                I look forward to seeing all 12 Dragons on Saturday! ROAR
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
                                Practices are ...(edited) Tuesday/Thursday 5-6pm at Elk Plain.
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
                               Practice Cancellations due to School Events
                            </Typography>
                            <List>
                               <ListItem>
                                3/14/2023 Tuesday - Battle of the Books
                               </ListItem>
                               <ListItem>
                                3/16/2023 Thursday - Spring Band Concert
                               </ListItem>
                               <ListItem>
                                3/21/2023 Tuesday - Spring Orchestra Concert
                               </ListItem>
                            </List>
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
        </Box>
    )
}
