import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from '../events'

let Timeslots = ({ localizer }) => (
  <Calendar
    events={events}
    step={60}
    timeslots={1}
    localizer={localizer}
    defaultView={Views.WEEK}
    defaultDate={new Date(2021, 4, 19)}
  />
)

export default Timeslots
