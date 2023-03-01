import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


export default function Calendar(props) {



  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        // { title: 'Game 1', date: '2023-02-27' },
        { title: 'Practice Game', date: '2023-03-04' }
      ]}

    />
  )
}
