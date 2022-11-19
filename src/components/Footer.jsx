import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='footer container'>
      <ul className='footer__list'>
        <li className='footer__item'>
          <a className='footer__link' href='#'>
            <FaFacebookF />
          </a>
        </li>
        <li className='footer__item'>
          <a className='footer__link' href='#'>
            <FaTwitter />
          </a>
        </li>
        <li className='footer__item'>
          <a className='footer__link' href='#'>
            <FaInstagram />
          </a>
        </li>
      </ul>
    </footer>
  )
}
