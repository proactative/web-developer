import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './Slider.css'
import image from "../../images/introBackground.png"
import travellingImage from '../../images/slider/r_t_demo.gif'


function Slider() {
  return (
		<div class="slider__container">
			<Carousel>
				<div>
					<img src={image} alt="smth"/>
					<p className="legend">Welcome to my portpolio</p>
				</div>

				<div>
				    <img src={image} alt="smth"/>
					<p className="legend">"Mesto" mini social network in two repositories (Vanilla and ReactJS)</p>
				</div>

				<div>
				  <img src={image} alt="smth"/>
					<p className="legend">"Mesto" authorization</p>
				</div>

				<div>
				  <img src={travellingImage} alt="smth"/>
					<p className="legend">"Travelling" - adaptive-responsive layout</p>
				</div>

				<div>
				  <img src={image} alt="smth"/>
					<p className="legend">visit site    https://spid.center/en/legal</p>
				</div>

			</Carousel>
		</div>
  )
}

export default Slider
