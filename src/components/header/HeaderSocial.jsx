import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='http://linkedin.com' target="blank"><BsLinkedin/></a>
        <a href='http://github.com' target="blank"><FaGithub/></a>        
    </div>
  )
}

export default HeaderSocial