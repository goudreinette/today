import React from 'react'
import Nav from './Nav/Nav'
import Day from './Day/Day'

export default class Layout extends React.Component
{
  componentDidMount ()
  {
    if (!localStorage.getItem('authToken') && location.pathname !== '/login')
      this.props.history.push('/login')
  }

  render ()
  {
    return (
      <div id="layout">
        <Nav />
        <main>
          {this.props.children}
          <Day {...this.props.selectedDay} />
        </main>
      </div>
    )
  }
}
