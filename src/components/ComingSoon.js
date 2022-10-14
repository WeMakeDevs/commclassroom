import React from 'react'
import Discord from '../assets/Discord.png'
import  Youtube from '../assets/youtube.png'
import ComingSoonNavbar from './ComingSoonNavbar.js'
import "../styles/Comingsoon.css"

const Header = () => {
  return (
    <>
    <ComingSoonNavbar />
    <section className="header_cont_1">
    <div className="header_cont_1_a">
      <p className="header_free_community"> 
       We are under  <span className="header_free">major upgrade</span>
    </p>
    <p className="header_para_about">
    Hey folks! We are currently upgrading the Community Classroom website to make it open source. Till then, you can browse our YouTube Channel and Discord Server.
    </p>
    </div>
    <div className="header_cont_2_b">
          <a href='https://www.youtube.com/c/KunalKushwaha/' target="_blank"><button className="header_cont_2_b_youtube"> Youtube <img className="header_cont_2_b_img_youtube" src={Youtube} alt="youtube" />  </button></a>
          <a href='https://discord.io/commclassroom' target="_blank"><button className="header_cont_2_b_discord"> Discord <img className="header_cont_2_b_img_discord" src={Discord} alt="discord" /></button></a>
    </div>
    </section>
    </>
  )
}

export default Header