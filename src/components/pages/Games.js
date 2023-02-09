import React from 'react';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Drawer from '../Drawer';




function createData(game, win, field, snacks, drinks, opponent ) {
    return { game, win, field, snacks, drinks, opponent };
  }

const rows = [
    createData(1, "W", 4, "Leona's Mom", "Leona's Mom", "Johnson" ),
    createData(2, " ", 4, "Sarah's Mom", "Mary's Dad", "Naches Trail" ),

]

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
                    Awaiting Schedule Release
                </Typography>
            </Container>
          <Drawer/>
            <div style={{ width: '100%' }}>
            <TableContainer component={Paper} >
      <Table  size="medium" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow  sx={{
        backgroundColor: "#fcecc4",
        borderBottom: "2px solid black",
        "& th": {
          fontSize: "1.25rem",
          color: "rgba(96, 96, 96)"
        }
      }}>
            <TableCell  >Game</TableCell>
            <TableCell align="left">W/L</TableCell>
            <TableCell align="left">Field</TableCell>
            <TableCell align="left">Snacks</TableCell>
            <TableCell align="left">Drinks</TableCell>
            <TableCell align="left">Opponent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ }}>
          {rows.map((row) => (
            <TableRow hover
              key={row.game}
              sx={{ '&:first-child th, &:last-child th': {  fontSize: "1.25rem"}, '&:first-child td, &:last-child td': {  fontSize: "1rem"} }}
            >
              <TableCell component="th" scope="row">
                {row.game}
              </TableCell>
              <TableCell align="left">{row.win}</TableCell>
              <TableCell align="left">{row.field}</TableCell>
              <TableCell align="left">{row.snacks}</TableCell>
              <TableCell align="left">{row.drinks}</TableCell>
              <TableCell align="left">{row.opponent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
            
        </Box>
    )
}
