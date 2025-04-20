import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

// declare a style for the info box
const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
          ✨ Welcome, traveler. <br />
          I’m <span className='font-semibold'>Anna Truong</span>, a weaver of code and digital dreams 🧵💫
          <br />
          From the land of Adelaide, I craft interfaces that enchant and experiences that linger.
        </h1>
      ),      
      2: (
        <InfoBox
          text="Curious by nature, I wander through lines of code crafting charming user experiences and elegant spells of interactivity."
          link="/about"
          btnText="🌟 Step into my story"
        />
      ),
      
      3: (
        <InfoBox
          text="📜 A trail of enchanted creations — each project a spellbook of design, collaboration, and frontend magic."
          link="/projects"
          btnText="Browse the magic 🧙‍♀️"
        />
      ),
      
      4: (
        <InfoBox
          text=" 📮The portal is open — whether for collaboration or a kindred chat, I’d love to hear from you ✉️"
          link="/contact"
          btnText="Start a spell"  
        />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo