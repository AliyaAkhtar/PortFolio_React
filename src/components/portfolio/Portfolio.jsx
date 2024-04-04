import React from 'react'
import './portfolio.css'
import img1 from '../../assets/tourists.png'
import img2 from '../../assets/jobPortal.png'
import img3 from '../../assets/weather.png'
import img4 from '../../assets/scarfs.png'
import img5 from '../../assets/face.png'
import img6 from '../../assets/movie.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Portfolio = () => {

  useEffect(() => {
          Aos.init({duration: 2000});
  }, []);
  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
      <article data-aos = "fade-right" className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img2} alt="" height={300}/>
          </div>
          <h3>Job Portal</h3>
          <p>ReactJS, NodeJS, MongoDB</p>
        </article>
        <article data-aos = "fade-left" className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="" height={300}/>
          </div>
          <h3>Tourists Website</h3>
          <p>HTML, CSS, JS</p>
        </article>
        <article data-aos = "fade-right" className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img4} alt=""  height={300}/>
          </div>
          <h3>TheScarfSpot</h3>
          <p>ReactJS, NodeJS</p>
        </article>
        <article data-aos = "fade-left" className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img3} alt=""  height={300}/>
          </div>
          <h3>Weather Forecast Website</h3>
          <p>ReactJS, Weather API</p>
        </article>

        <article data-aos = "fade-right" className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img5} alt="" height={300}/>
          </div>
          <h3>Smart Attendance System</h3>
          <p>Python, MySQL</p>
        </article>
        <article data-aos = "fade-left" className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img6} alt=""height={300} />
          </div>
          <h3>Movie Ticket Booking System</h3>
          <p>C++</p>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
