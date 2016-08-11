import React from 'react'
import '../css/Today.css'
import dateformat from 'dateformat'

export default function Today (props)
{
  return (
    <div className="today">
      <section id="day">
        <h1 className="date">{dateformat(new Date(), 'fullDate')}</h1>
      </section>
    </div>
  )
}
