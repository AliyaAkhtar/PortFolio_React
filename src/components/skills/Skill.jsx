import React from 'react'
import './skill.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skill = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container" style={{marginLeft: "10rem"}}>
      <div data-aos="zoom-out"className="experience__web" style={{width: "40rem"}}>
         <h3>Core AI/ML Skills</h3>
         <div className="experience__content" style={{rowGap: "1rem"}}>
          <article  className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Machine Learning</h4> 
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Deep Learning</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <h4 data-aos = "fade-left">CNNs, RNNs, LSTMs</h4>
          </article>
          {/* <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Scikit-learn</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">TensorFlow</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">PyTorch</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Keras</h4>
          </article> */}
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">NLP</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">RAG</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Data Augmentation</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Computer Vision</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">LLMs</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Vector Databases</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Object Detection</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">OCR</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Text-to-Speech (TTS)</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-left">Prompt Engineering</h4>
          </article>
         </div>
      </div>
      <div data-aos="zoom-out" className="experience__programming" style={{width: "35rem"}}>
      <h3>Other Programming Skills</h3>
         <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">Python</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">FastAPI</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">Javascript</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">Typescript</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">HTML</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">CSS</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">NextJS</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">NodeJS</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">C++</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">ReactJS</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">MySQL</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">PostgreSQL</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">Supabase</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">MongoDB</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill  className='experience__details-icon'/>
            <h4 data-aos = "fade-right">Docker</h4>
          </article>
         </div>
      </div>
      </div>
    
    </section>
  )
}

export default Skill
