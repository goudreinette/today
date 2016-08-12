import React, { Component } from 'react';
import Layout from './Layout/Layout'


export default class App extends Component
{
  constructor ()
  {
    super()
    this.state = {selectedDate: new Date()}
  }

  render ()
  {
    const selectedDay = {date: this.state.selectedDate}
    const view        = this.props.routes.slice(2)

    return (
      <div className="app">

        {React.cloneElement(this.props.children, {selectedDay, view})}
        
      </div>
    )
  }
}
