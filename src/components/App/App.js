import React from 'react'
import { useState, useEffect } from 'react'
import i18next from 'i18next';

import './App.css'
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'

function App() {
  const[started, setStarted] = useState(false);
  const[activeRU, setActiveRU] = useState(false);

  const getStarted = () => {
    setStarted(true);
  }

  /* translation functionality */
  useEffect(() => {
    const language = sessionStorage?.getItem('i18nextLng')
    if (language === "ru") {
      sessionStorage.setItem('i18nextLng', 'ru')
    } else {
      sessionStorage.setItem('i18nextLng', 'en') 
    }
    
  }, [])

  const setLanguageEN = () => {
    sessionStorage.setItem('i18nextLng', 'en')
    i18next.changeLanguage("en");
    setActiveRU(false)
  }

  const setLanguageRU = () => {
    sessionStorage.setItem('i18nextLng', 'ru')
    i18next.changeLanguage("ru");
    setActiveRU(true);
  }

  return (
    <div className={!started ? "app app_shorted" : "app"}>
      <Header setLanguageEN={setLanguageEN} setLanguageRU={setLanguageRU} activeRU={activeRU} />
      <main className="app__main">
        <Intro  getStarted={getStarted} /> 
        <AboutMe />
        <Skills />  
        <Portfolio />
      </main>
      <Footer />  
    </div>
  )
}

export default App
