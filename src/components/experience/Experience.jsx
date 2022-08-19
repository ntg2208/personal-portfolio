import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>


            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>


            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience