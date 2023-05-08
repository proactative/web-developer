import React from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './Intro.css'

function Intro(props) {
  const { t } = useTranslation()
  const [visibleButton, setVisibleButton] = useState(false)
 
  const showButton = () => {
    setVisibleButton(true)
  }

  useEffect(() => {
    setTimeout(showButton, 2500)
  }, [])

  return (
    <section className="intro">
      <div className="intro__container">
        <h1 className="intro__title">
          WEB
          <span className="l1">
            -
            <span className="l2">
              D
              <span className="l3">
                E
                <span className="l4">
                  V
                  <span className="l5">
                    E
                    <span className="l6">
                      L
                      <span className="l7">
                        O
                        <span className="l8">
                          P 
                          <span className="l9">
                            E
                            <span className="l10">
                              R
                              <span className="l11">_</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </h1>
        <button
          onClick={props.getStarted}
          className={
            visibleButton
              ? 'intro__button'
              : 'intro__button intro__button_invisible'
          }
        >
          <a className="intro__more-link" href="#aboutMe">
            {t('more')}
          </a>
        </button>
      </div>
      <div className="intro__decor" />
    </section>
  )
}

export default Intro
