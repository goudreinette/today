import React from 'react'
import {Link} from 'react-router'
import '../css/Nav.css'

export default function Nav (props)
{
  return (
    <nav>
      <Link id="today" to="/today" activeClassName="active">
        <i></i>
      </Link>
      <Link id="entries" to="/entries" activeClassName="active">
        <i></i>
      </Link>
      <Link id="stats" to="/stats" activeClassName="active">
        <i></i>
      </Link>
    </nav>
  )
}
