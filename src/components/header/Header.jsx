import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mypic.png'
import HeaderSocials from './HeaderSocials'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <header>
      <div className="container header__container">
        <h5 data-aos="zoom-in">Hello I'm</h5>
        {/* <h1 data-aos="zoom-in" style={{color: "#f8c1a1"}}>ALIYA AKHTAR</h1> */}
        <h1
          data-aos="zoom-in"
          style={{
            background: 'linear-gradient(90deg, #f8c1a1, #ec008b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '900',
            fontSize: '2.5rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textShadow: '0 0 10px rgba(232, 0, 139, 0.7)',
            fontFamily: 'Pacifico'
          }}
        >
          ALIYA AKHTAR
        </h1>

        {/* <h5 data-aos="zoom-in" className="text-light">AI / ML Enthusiast</h5> */}
        <h5 data-aos="zoom-in" className="text-light" >
          <span >
            <Typewriter
              words={[
                'AI / ML Enthusiast',
                'Computer Vision Developer',
                'NLP & LLM Explorer',
                'Full Stack Developer',
                'Generative AI Innovator',
                'Software Engineering Student'
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h5>

        <CTA />
        <HeaderSocials />
        <div data-aos="fade-up" className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header
