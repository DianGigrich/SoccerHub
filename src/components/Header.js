import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import '../index.css'

function Header(props) {

    return (

        <React.Fragment >
            <Toolbar sx={{ border: 5 , borderColor: 'primary.main'}}>
                <Typography

                    component="h2"
                    variant="h2"
                    align="center"
                    color= "#4aedc4"
                    sx={{ flex: 1, letterSpacing: 6 }}
                    className="dragons"
                >
                    <LocalFireDepartmentIcon sx={{ color:"red"}}/>
                    <strong>Dragons</strong>
                    <LocalFireDepartmentIcon sx={{ color:"red"}}/>
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
