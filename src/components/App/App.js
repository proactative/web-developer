import React from 'react'
import { useState, useEffect } from 'react'
import i18next from 'i18next';

import './App.css'
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'


function App() {
  const [hiddenSectionsSeen, setHiddenSectionsSeen] = useState(false)

 const showHiddenSections = () => {
    setHiddenSectionsSeen(true)
  }

  /* translation functionality */
  useEffect(() => {
    sessionStorage.setItem('i18nextLng', 'en')
  }, [])

  const setLanguageEN = () => {
    sessionStorage.setItem('i18nextLng', 'en')
    i18next.changeLanguage("en");
  }

  const setLanguageRU = () => {
    sessionStorage.setItem('i18nextLng', 'ru')
    i18next.changeLanguage("ru");
  }

  return (
    <div className="app">
      <Header setLanguageEN={setLanguageEN} setLanguageRU={setLanguageRU} />
      <main className="app__main">
        <Intro showHiddenSections={showHiddenSections} />
        <div
          className={
            hiddenSectionsSeen ? 'app__more' : 'app__more app__more_hidden'
          }
        >
          <Skills />
          <Portfolio />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
