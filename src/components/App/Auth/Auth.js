import React from 'react'

export default function Auth (props)
{
  return (
    <form id="auth">
      <input id="email"    type="email" placeholder="email"/>
      <input id="password" type="password" placeholder="password"/>
      <button onClick={_ => localStorage.setItem('authToken', 'hello')}>
        Login
      </button>
    </form>
  )
}
