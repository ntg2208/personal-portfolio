import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activNav, setActiveNav] = useState('/#')
  return (
    <nav> 
      <a href='/#' onClick={() => setActiveNav('/#')} className={activNav === '/#' ? 'active': ''} ><AiOutlineHome/></a>  
      <a href='#about' onClick={() => setActiveNav('#about')} className={activNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activNav === '#experience' ? 'active': ''}><BsBookmark/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activNav === '#services' ? 'active': ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activNav === '#contact' ? 'active': ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav