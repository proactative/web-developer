import React from 'react'
import Slider from '../Slider/Slider';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className='portfolio__container'>

        <p className="portfolio__subtitle">The beauty of work is that you always can do better</p>
        <div className='portfolio__tag'>
          <p className='portfolio__tag-text'>Projects</p>
        </div>

        <h2 className='portfolio__title'>My portfolio</h2>

        <div className="portpolio__slider">
          <Slider />
        </div>

        <p className='portfolio__subtitle portfolio__subtitle_bottom'>... for more details visit my github account</p>
      </div>
    </section>
  )
}

export default Portfolio