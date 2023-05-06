import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './Skills.css'
// import practicumRU from '../../../public/assets/img/certificates/'
// import practicumEN from '../../images/certificates/YandexEN.pdf'
// import contest from '../../images/certificates/contest.pdf'

function Skills() {
  const { t } = useTranslation();
  const [contentShown, setContentShown] = useState(false)

  const handleShowContent = () => {
    setContentShown(!contentShown)
  }

  return (
    <section className="skills">
      <div className="skills__container">

        <p className="skills__subtitle">Frontend is not just a job, its a craft</p>
        <div className="skills__tag">
          <p className="skills__tag-text">My skills</p>
        </div>

        <h2 className="skills__title">My stack</h2>

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
            <p>{t("diplomas")}</p>
              <span>X</span>
            </div>
            <div
              className={
                contentShown
                  ? 'skills__accordion-content'
                  : 'skills__accordion-content skills__accordion-content_opened'
              }
            >
              <ul className="skills__diploma-list">
                <li className="skills__diploma-item ru">
                  {/* <img src={practicumRU} alt="diploma" /> */}
                </li>
                <li className="skills__diploma-item en">
                  {/* <img src={practicumEN} alt="diploma" /> */}
                </li>
                <li className="skills__diploma-item contest">
                  {/* <img src={contest} alt="diploma" /> */}
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
