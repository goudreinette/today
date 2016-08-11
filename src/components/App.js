import React, { Component } from 'react';

export default class App extends Component
{
  render ()
  {
    return (
      <div className="app">
        {React.cloneElement(this.props.children)}
      </div>
    )
  }
}
