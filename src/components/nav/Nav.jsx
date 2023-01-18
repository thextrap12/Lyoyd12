import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiCustomerServiceLine} from 'react-icons/ri'
import {RiMessage2Line} from 'react-icons/ri'
import {useState} from 'react';


const Nav = () => {
  const[activeNav,setActiveNav] =useState('');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==="#"?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==="#about"?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==="#experience"?'active':''}><BiBookAlt/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==="#services"?'active':''}><RiCustomerServiceLine/></a>
      <a href="#contacts" onClick={()=>setActiveNav('#contacts')} className={activeNav==="#contacts"?'active':''}><RiMessage2Line/></a>
    </nav>
  )
}

export default Nav