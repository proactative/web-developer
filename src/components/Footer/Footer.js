import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <p className="footer__invitation">Feel free to write to me</p>
          <ul className="footer__contacts">
            <li>
              <a
                href="mailto:tatiana.vik@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="footer__contact-item"
              >
                <span className="footer__contact-icon footer__contact-icon_email" />
                <p className="footer__contact-text">email@gmail.com</p>
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
                <p className="footer__contact-text">github</p>
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
                <p className="footer__contact-text">@proactative</p>
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">&copy;Tatiana Parfeniuk 2023</p>
      </div>
    </footer>
  )
}

export default Footer
