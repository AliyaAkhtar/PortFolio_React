// import React from 'react'
// import './about.css'
// import ME from '../../assets/mypic.png'
// import {FaAward} from 'react-icons/fa'
// import {MdOutlineComputer} from 'react-icons/md'
// import { useEffect } from 'react'
// import Aos from 'aos'
// import 'aos/dist/aos.css'
// const About = () => {
//   useEffect(() => {
//     Aos.init({duration: 2000});
//   }, []);
//   return (
//     <section id='about'>
//       <h5>Get To Know</h5>
//       <h2>About Me</h2>

//       <div className="container about__container">
//         <div  className="about__me">
//           <div className="about__me-image">
//             <img src={ME} alt="About image" />
//           </div>
//         </div>
//         <div className="about__content">
//            <div className="about__cards">
//             <article data-aos="flip-left"className='about__card'>
//               <FaAward className='about__icon'/>
//               <h5>Experience</h5>
//               <small>1+ Month Working</small>
//             </article>

//             <article data-aos="flip-right" className='about__card'>
//               <MdOutlineComputer className='about__icon'/>
//               <h5>Projects</h5>
//               <small>7+ Compeleted Projects</small>
//             </article>

//            </div>

//            <p data-aos="fade-right">I'm a skilled developer currently pursuing the bachelors degree in software engineering from NED university. I'm always looking forward to learn new and innovative technical skills.</p>
//            <a data-aos="fade-left" href="#contact" className='btn btn-primary'>Let's Talk</a>
//         </div>
//       </div>

//     </section>
//   )
// }

// export default About

import React, { useEffect, useState } from 'react';
import './about.css';
import ME from '../../assets/mypic.png';
import { FaAward } from 'react-icons/fa';
import { MdOutlineComputer } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const shortText = `I'm a passionate AI/ML developer currently studying at NED University. I love building intelligent systems that solve real-world problems.`;

  const fullText = `
Hi, I’m Aliya Akhtar — a curious mind, a problem solver, and an AI/ML enthusiast on a mission to turn data into intelligence. I’m currently pursuing my Bachelor's in Software Engineering from NED University (CGPA: 3.89) and have built a solid foundation in artificial intelligence, machine learning, and full-stack development through academic projects, internships, and real-world applications.

⚙️ What I Do Best:
From training deep learning models to building intelligent web apps, I specialize in creating impactful solutions using technologies like TensorFlow, PyTorch, YOLO, TTS, and LLMs (OpenAI, Gemini, LLaMA). Whether it's building a diabetes detection system from thermal images or crafting a generative storytelling platform for kids — I love blending creativity with cutting-edge tech.

💡 What Drives Me:
The idea of using AI to solve real-world problems excites me — be it smart traffic systems, agricultural yield prediction, or fraud detection. My work has ranged from OCR and object detection to NLP and generative AI, and I constantly strive to push the boundaries of what machines can learn and do.

🚀 What I Believe:
AI isn’t just the future — it’s the tool of today’s innovation. I believe in building solutions that are not only intelligent but also ethical, efficient, and user-centric.

Let’s innovate with purpose. Let's code the future. 💫
`;

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article data-aos="flip-left" className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ AI/ML Internships</small>
            </article>

            <article data-aos="flip-right" className='about__card'>
              <MdOutlineComputer className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p data-aos="fade-right">{shortText}</p>

          {/* <button
            onClick={() => setShowModal(true)}
            data-aos="fade-left"
            className='btn btn-primary'
          >
            Read More
          </button> */}

          <a data-aos="fade-left" onClick={() => setShowModal(true)} className='btn btn-primary' style={{ marginRight: '1rem' }}>
            Get to know more about me
          </a>
          <a data-aos="fade-left" href="#contact" className='btn btn-primary'>
            Let's Talk
          </a>

        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>More About Me</h3>
            {fullText.split('\n').map((line, index) => (
              <p key={index}>{line.trim()}</p>
            ))}
            <button className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
