import React from 'react'
import dateformat from 'dateformat'
import '../css/Day.css'

export default function Day ({date})
{

  return (
    <div id="day">
      <h1 className="date">
        {dateformat(date, 'dddd,')} <br/>
        {dateformat(date, 'mmmm dS, yyyy')}
      </h1>
    </div>
  )
}
