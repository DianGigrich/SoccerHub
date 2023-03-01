import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import EventItem from '../EventItem'

export default function Calendar(props) {
 const info = {events: [
        { title: 'Practice Game', date: '2023-03-04', time: '' },
        { title: 'Practice Cancelled', date: '2023-03-14' },
        { title: 'Practice Cancelled', date: '2023-03-21' },
        { title: 'Practice Cancelled?', date: '2023-03-15'},
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
