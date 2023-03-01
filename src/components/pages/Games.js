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

]
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
<Typography>
  Practice game schedule is out on Bethel Rec, but it only shows BMS table and we aren't on it.  I think they messed up.
</Typography>
            </Container>
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
              <TableCell component="th" scope="row" key={row.index}>{row.title}</TableCell>
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
