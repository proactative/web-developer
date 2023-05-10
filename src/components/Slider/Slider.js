import React from 'react'
import { useTranslation } from 'react-i18next'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './Slider.css'
import uValery from '../../images/slider/uValery.gif'
import aidCenter from '../../images/slider/aidCenter.gif'
import travel from '../../images/slider/travel.gif'
import mestoF from '../../images/slider/mestoFunctionality.gif'
import moviesF from '../../images/slider/moviesFunctionality.gif'
import moviesP from '../../images/slider/moviesProfile.gif'
import moviesA from '../../images/slider/moviesAuth.gif'

function Slider() {
  const { t } = useTranslation()

  return (
    <div class="slider__container">
      <Carousel>
        <div>
          <img src={mestoF} alt="my slide" />
          <p className="legend">{t('portfolio_slide1')}</p>
        </div>

        <div>
          <img src={moviesF} alt="my slide" />
          <p className="legend">{t('portfolio_slide2')}</p>
        </div>

        <div>
          <img src={moviesP} alt="my slide" />
          <p className="legend">{t('portfolio_slide3')}</p>
        </div>

        <div>
          <img src={moviesA} alt="my slide" />
          <p className="legend">{t('portfolio_slide4')}</p>
        </div>

        <div>
          <img src={travel} alt="my slide" />
          <p className="legend">{t('portfolio_slide5')}</p>
        </div>

        <div>
          <img src={uValery} alt="my slide" />
          <p className="legend">{t('portfolio_slide6')}</p>
        </div>

        <div>
          <img src={aidCenter} alt="my slide" />
          <p className="legend">
          {t('portfolio_slide7')}&nbsp;&nbsp;
            <a className="slider__site-link" href="https://spid.center/en/legal" rel="noreferrer" target="_blank" >
              https://spid.center/en/legal
            </a>
          </p>
        </div>
      </Carousel>
    </div>
  )
}

export default Slider
