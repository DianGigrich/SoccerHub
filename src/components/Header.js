import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Header(props) {

    return (

        <React.Fragment >
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: "#4db6ac" }}>
                <Typography

                    component="h2"
                    variant="h2"
                    align="center"
                    sx={{ flex: 1, letterSpacing: 6 }}
                >
                    Soccer Team Name Here
                </Typography>

            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
            
            </Toolbar>
        </React.Fragment>

    );
}


export default Header;
