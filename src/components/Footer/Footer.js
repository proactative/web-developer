import React from 'react'
import { useTranslation } from 'react-i18next'

import './Footer.css'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <p className="footer__invitation">{t('footer_invitation')}</p>
          <ul className="footer__contacts">
            <li>
              <a
                href="mailto:tatiana.vik@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="footer__contact-item"
              >
                <span className="footer__contact-icon footer__contact-icon_email" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/proactative"
                target="_blank"
                rel="noreferrer"
                className="footer__contact-item"
              >
                <span className="footer__contact-icon footer__contact-icon_github" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/proactative"
                target="_blank"
                rel="noreferrer"
                className="footer__contact-item"
              >
                <span className="footer__contact-icon footer__contact-icon_telegram" />
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">&copy;{t('footer_copyrights')}</p>
      </div>
    </footer>
  )
}

export default Footer
