import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './Skills.css'

function Skills() {
  const { t } = useTranslation();
  const [contentShown, setContentShown] = useState(false)

  const handleShowContent = () => {
    setContentShown(!contentShown)
  }

  return (
    <section className="skills">
      <div className="skills__container">

        <p className="skills__subtitle">{t('skills_qoute')}</p>
        <span className="skills__decor-span" />
        <div className="skills__tag">
          <p className="skills__tag-text">{t('skills_tag')}</p>
        </div>

        <h2 className="skills__title">{t('skills_title')}</h2>

        <div className="skills__stack">
            <ul className="skills__stack-list">
              <li className="skills__stack-item">
                <p>HTML5</p>
              </li>
              <li className="skills__stack-item">
                <p>CSS3</p>
              </li>
              <li className="skills__stack-item">
                <p>SASS</p>
                </li>
              <li className="skills__stack-item">
                <p>JavaScript</p>
              </li>
              <li className="skills__stack-item">
                <p>ReactJS</p>
              </li>
              <li className="skills__stack-item">
                <p>NPM</p>
              </li>
                <li className="skills__stack-item">
                  <p>Git</p>
                </li>
              <li className="skills__stack-item">
                <p>English</p>
              </li>
            </ul>
        </div>
            
        <div className="skills__accordion">
          <div className="skills__accordion-label" onClick={handleShowContent}>
            <p>{t('skills_accordion_label')}</p>
              <span className="skills__sign">{!contentShown ?  '>' : '<'}</span>
            </div>
            <div
              className={
                contentShown
                  ? 'skills__accordion-content  skills__accordion-content_opened'
                  : 'skills__accordion-content'
              }
            >
              <ul className="skills__diploma-list">
                <li className="skills__diploma-item ru" />
                <li className="skills__diploma-item en" />
                <li className="skills__diploma-item contest" />
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
