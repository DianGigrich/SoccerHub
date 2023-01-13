import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';

// TODO: create table instead of cards

export default function Home() {
    return (
        <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
        }}
        >
            <Container>
                <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    className="welcome"
                >
                    Games
                </Typography>
            </Container>
            <Grid container spacing={2} sx={{ py: 8, bgcolor: "#83ccc5" }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >

                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                This will be a list of our games.
                            </Typography>
                            <Typography>
                                I am not sure I want a database involved, that way I can keep control of the site.
                                I also might want this as a table instead of cards
                            </Typography>
                            
                        </CardContent>
                    </Card>

                </Grid>
                </Grid>

        </Box>
    )
}
