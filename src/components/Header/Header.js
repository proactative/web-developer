import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__me">
          <div className="header__photo" />
          <h2>Tatiana Parfeniuk</h2>
        </div>

        <ul className='header__links'>
          <p>Skills</p>
          <p>Portfolio</p>
          <p>Contacts</p>
        </ul>

        <div className="header__lang-toggle">
          <button className="header__btn" type="button">
            En
          </button>
          <button className="header__btn" type="button">
            Ru
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
