import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import EventItem from '../EventItem'

export default function Calendar(props) {
 const info = {events: [
        { title: 'Practice Game', date: '2023-03-04', time: '' },
        { title: 'Cancelled', date: '2023-03-14' },
        { title: 'Cancelled', date: '2023-03-21' },
        { title: 'Cancelled?', date: '2023-03-15'},
        { title: '2pm BHS 8', date: '2023-03-11'},
        { title: '9am BHS 8', date: '2023-03-18'},
        { title: '11:30am BHS 8', date: '2023-03-25'},
        { title: '5:15pm BMS 3', date: '2023-03-27'},
        { title: '9:15am Art Crate 2', date: '2023-04-01'},
        { title: '10:15am BHS 8', date: '2023-04-15'}

      ], color: "purple"
    }


  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={info}
 
    />
  )
}
