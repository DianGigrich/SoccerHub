import React from 'react';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Drawer from '../Drawer';




function createData(game, date, win, field, snacks, drinks, opponent ) {
    return { game, date, win, field, snacks, drinks, opponent };
  }

const rows = [
    createData(1, 2.00, "W", 4, "Leona's Mom", "Leona's Mom", "Example" ),
    createData(2, 3.00, " ", 3, "Sarah's Mom", "Mary's Dad", "2nd Example" ),

]

export default function Games(props) {

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
                    Awaiting Schedule Release (Fri, March 3rd)
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
            <TableCell  key="game">Game</TableCell>
            <TableCell  key="date">Date</TableCell>

            <TableCell key="win" align="left">W/L</TableCell>
            <TableCell key="field" align="left">Field</TableCell>
            <TableCell key="snakcs" align="left">Snacks</TableCell>
            <TableCell key="drinks" align="left">Drinks</TableCell>
            <TableCell key="opp" align="left">Opponent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ }}>
          {rows.map((row) => (
            <TableRow hover
              key={row.game}
              sx={{ '&:first-of-type th, &:last-child th': {  fontSize: "1.25rem"}, '&:first-of-type td, &:last-child td': {  fontSize: "1rem"} }}
            >
              <TableCell component="th" scope="row" key={row.index}>
                {row.game}
              </TableCell>
              <TableCell align="left" key={row.index}>
                {row.date}
              </TableCell>
              <TableCell >{row.win}</TableCell>
              <TableCell align="left" key={row.index}>{row.field}</TableCell>
              <TableCell align="left" key={row.index}>{row.snacks}</TableCell>
              <TableCell align="left" key={row.index}>{row.drinks}</TableCell>
              <TableCell align="left" key={row.index}>{row.opponent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
            
        </Box>
    )
}
