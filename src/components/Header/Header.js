import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className='header__me'>
        <div className="header__photo" />
        <h2>Tatiana Parfeniuk</h2>
      </div>
      <div className="header__lang-toggle">
        <button className='header__btn' type="button">En</button>
        <button className='header__btn' type="button">Ru</button>
      </div>

      
    </div>
  )
}

export default Header