import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';





export default function Games(props) {
  const navigate = useNavigate()
function createData(title, date, time, field, snacks, drinks, opponent ) {
    return { title, date, time, field, snacks, drinks, opponent };
  }

const rows = [
    createData("Practice Game", "3/04", "?", "?", "", "", "TBD" ),
    createData(1, "3/11", "2 pm", "BHS 8", "", "", "Kapowsin" ),
    createData(2, "3/18", "9 am", "BHS 8", "", "", "Graham" ),
    createData(3, "3/25", "1130 am", "BHS 8", "", "", "Nelson" ),
    createData(4, "3/27", "5:15 pm", "BMS 3", "", "", "Centennial" ),
    createData(5, "4/1", "9:15 am", "Art Crate 2", "", "", "Rocky Ridge" ),
    createData(6, "4/15", "10:15 am", "BHS 8", "", "", "Thompson" )

]
    return (
        <Box sx={{
            pt: 8,
            pb: 6,
        }}
        >
 
            <Button textColor="inherit" value="Calendar" label="Calendargames" onClick={() => navigate('/Calendar')}>Calendar View<CalendarMonthIcon/></Button>
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
            <TableCell  key="title">Game</TableCell>
            <TableCell  key="date">Date</TableCell>
            <TableCell  key="time">Time</TableCell>
            <TableCell key="field" align="left">Field</TableCell>
            <TableCell key="snakcs" align="left">Snacks</TableCell>
            <TableCell key="drinks" align="left">Drinks</TableCell>
            <TableCell key="opp" align="left">Opponent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ }}>
          {rows.map((row) => (
            <TableRow hover
              key={row.title}
              sx={{ '&:first-of-type th, &:last-child th': {  fontSize: "1.25rem"}, '&:first-of-type td, &:last-child td': {  fontSize: "1rem"} }}
            >
              <TableCell component="th" scope="row" key={row.index}><strong>{row.title}</strong></TableCell>
              <TableCell align="left" key={row.index}>{row.date}</TableCell>
              <TableCell align="left" key={row.index}>{row.time}</TableCell>
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
