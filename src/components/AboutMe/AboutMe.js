import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe__container">
      <p className="aboutMe__subtitle">One of the ways to be happy is to enjoy your profession.</p>
        <div className="aboutMe__tag">
          <p className="aboutMe__tag-text">Profile</p>
        </div>

        <h2 className="aboutMe__title">About me</h2>

        <div className="aboutMe__info-container">
          <div className="aboutMe__decor"></div>
        
          <div className="aboutMe__info">
              <div className="aboutMe__item greetings">
                <p className="greeting greetings_top" >Hello there!</p>
                <p className="greeting greetings_bottom" >
                  I am an HTML coder and junior Front-end developer dealing with Vanilla JS as well as ReactJS,
                  having experince in
                </p>
                <ul className="greeting__list">

                  <li className="greeting__list-item">
                    <div className="greeting__number">
                      <span className="greeting__span">1</span>
                    </div>
                    <p className="greeting__list-text">adaptive-responsive layouts</p>
                  </li>

                  <li className="greeting__list-item">
                    <div className="greeting__number">
                      <span className="greeting__span">2</span>
                    </div>
                    <p className="greeting__list-text">ReactJS applications</p>
                  </li>

                  <li className="greeting__list-item">
                    <div className="greeting__number">
                      <span className="greeting__span">3</span>
                    </div>
                    <p className="greeting__list-text">mini social network</p>
                  </li>

                </ul>

              </div> 
              <div className="aboutMe__item photo" />
              <div className="aboutMe__item image" />
              <div className="aboutMe__item name">
                <p className="name-item first">Tatiana</p>
                <p className="name-item surname">Parfeniuk</p>
              </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default AboutMe
