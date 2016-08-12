import React from 'react'
import dateformat from 'dateformat'

export default function Day ({date, text, list})
{
  return (
    <div id="day">
      <h1 className="date">
        {dateformat(date, 'dddd,')} <br/>
        {dateformat(date, 'mmmm dS, yyyy')}
      </h1>

      <div className="list">

        {list.cards.map((card, i) =>
          <div key={i} className="card"></div>)
        }

      </div>

      <textarea>
        {text}
      </textarea>
    </div>
  )
}
