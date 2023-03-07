import header1 from '../assets/header-1.jpg';
import header2 from '../assets/header-2.jpg';
import header3 from '../assets/header-3.jpg';
import header4 from '../assets/header-4.jpg';
import header5 from '../assets/header-5.jpg';
import { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';

import '../App.css';

function Header() {

  return (
    <Carousel className='header-section'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-carousel"
          src={header1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hair Care</h3>
          <p>Get the Best Hair Care in the game.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={header2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Spa Day</h3>
          <p>Get the most Relaxing Message.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={header3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Group Appoinments</h3>
          <p>
            Catch up with your gang while we pamper you
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={header4}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Deep Tissue Massage</h3>
          <p>
            Your body diserves a treat
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={header5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Skin Care</h3>
          <p>
            We love skin and glowing
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header