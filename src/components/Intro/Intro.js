import React from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './Intro.css'

function Intro() {
  const { t } = useTranslation()
  const [title, setTitle] = useState('WEB')
  const text = '--DEVELOPER_'
  let currentIndex = 0

  useEffect(() => {
    const id = setInterval(() => {
      setTitle((prev) => prev + text[currentIndex])
      currentIndex += 1
      let final = text.length - 1
      if (currentIndex === final) {
        clearInterval(id)
      }
    }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="intro">
      <div className="intro__container">
        <h1 className="intro__title">{title}</h1>
        <button className="intro__button" type="button">
          {t('more')}
        </button>
      </div>
      <div className="intro__decor" />
    </section>
  )
}

export default Intro
