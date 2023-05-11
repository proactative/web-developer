import React from 'react'
import { useTranslation } from 'react-i18next'
import './Header.css'

function Header(props) {
  const { t } = useTranslation();
  
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__me">
          <div className="header__photo" onClick={ props.openPopup } />
          <h2 className="header__title">{t("full name")}</h2>
        </div>

        <div className="header__lang-toggle">
          <button className={props.activeRU ? "header__btn" : "header__btn active"} type="button" onClick={props.setLanguageEN}>
            En
          </button>
          <button className={!props.activeRU ? "header__btn" : "header__btn active"} type="button" onClick={props.setLanguageRU}>
            Ru
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
