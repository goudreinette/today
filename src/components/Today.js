import React from 'react'
import List from './List'
import lists from '../../test/data/lists'
import '../css/Today.css'

export default function Today (props)
{
  return (
    <div className="today">
      {
        lists.map(list => <List />)
      }
    </div>
  )
}
