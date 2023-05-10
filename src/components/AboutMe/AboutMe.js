import React from 'react'
import { useTranslation } from 'react-i18next'

import './AboutMe.css'

function AboutMe() {
  const { t } = useTranslation()

  return (
    <div className="aboutMe" id="aboutMe">
      <div className="aboutMe__container">
        <p className="aboutMe__subtitle">{t('about_me_qoute')}</p>
        <span className="aboutMe__decor-span" />
        <div className="aboutMe__tag">
          <p className="aboutMe__tag-text">{t('about_me_tag')}</p>
        </div>

        <h2 className="aboutMe__title">{t('about_me_title')}</h2>

        <div className="aboutMe__info-container">
          <div className="aboutMe__decor"></div>

          <div className="aboutMe__info">
            <div className="aboutMe__item greetings">
              <p className="greeting greetings_top">
                {t('about_me_greetings')}
              </p>
              <p className="greeting greetings_bottom">{t('about_me_text')}</p>
              <ul className="greeting__list">
                <li className="greeting__list-item">
                  <div className="greeting__number">
                    <span className="greeting__span">1</span>
                  </div>
                  <p className="greeting__list-text">{t('about_me_item1')}</p>
                </li>

                <li className="greeting__list-item">
                  <div className="greeting__number">
                    <span className="greeting__span">2</span>
                  </div>
                  <p className="greeting__list-text">{t('about_me_item2')}</p>
                </li>

                <li className="greeting__list-item">
                  <div className="greeting__number">
                    <span className="greeting__span">3</span>
                  </div>
                  <p className="greeting__list-text">{t('about_me_item3')}</p>
                </li>
              </ul>
            </div>
            <div className="aboutMe__item photo" />
            <div className="aboutMe__item image" />
            <div className="aboutMe__item name">
              <p className="name-item first">{t('name')}</p>
              <p className="name-item surname">{t('surname')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
