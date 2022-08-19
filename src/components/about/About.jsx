import React from 'react'
import './about.css'
import ME from '../../assets/avatar.jpg'
import { BsAwardFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, alias officiis repellat quaerat mollitia expedita laboriosam quos praesentium officia, possimus veritatis soluta eligendi dignissimos, ipsum perferendis ut. Repudiandae, amet distinctio.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>
      </div>


    </section>
  )
}

export default About