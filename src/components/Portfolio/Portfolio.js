import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from '../Slider/Slider'
import './Portfolio.css'

function Portfolio() {
  const { t } = useTranslation()

  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <p className="portfolio__subtitle">{t('portfolio_qoute')}</p>
        <span className="portfolio__decor-span" />
        <div className="portfolio__tag">
          <p className="portfolio__tag-text">{t('portfolio_tag')}</p>
        </div>

        <h2 className="portfolio__title">{t('portfolio_title')}</h2>

        <div className="portpolio__slider">
          <Slider />
        </div>

        <p className="portfolio__subtitle portfolio__subtitle_bottom">
          {t('portfolio_text')}
        </p>
      </div>
    </section>
  )
}

export default Portfolio
