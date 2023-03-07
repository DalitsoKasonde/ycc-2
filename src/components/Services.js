import services from '../services';
import { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Row from 'react-bootstrap/Button';
import '../App.css';

function Services() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const servicesText = ['Hair Care', 'Grooming', 'Nail Care', 'Spa', 'Hair Plaiting'];


  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (
    <div className='services-section'>
      <div >
        <h4>Our Services</h4>
        <p>Enjoy our work and book today</p>
      </div>
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
          {
            services.map(image => {
              return (
                <motion.div className='item' key={image}>
                  <img src={image} alt="" />
                  
                </motion.div>
              );
            })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services