import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';




function createData(game, win, field, opponent, snacks, drinks) {
    return { game, win, field, opponent, snacks, drinks };
  }

const rows = [
    createData(1, "W", 4, "Johnson", "Leona's Mom", "Leona's Dad"),
    createData(2, " ", 4, "Naches Trail", "Sarah's Mom", "Mary's Dad"),

]

export default function Home(props) {

    return (
        <Box sx={{
            pt: 8,
            pb: 6,
        }}
        >
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
            <TableCell align="left">Opponent</TableCell>
            <TableCell align="right">Snacks</TableCell>
            <TableCell align="right">Drinks</TableCell>
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
              <TableCell align="left">{row.opponent}</TableCell>
              <TableCell align="right">{row.snacks}</TableCell>
              <TableCell align="right">{row.drinks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
            
        </Box>
    )
}
