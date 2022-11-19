import React from 'react'

export const Header = (props) => {
  return (
    <header className='header container'>
      <img src={props.logo} className='header__logo' alt='Logo' />
    </header>
  )
}
