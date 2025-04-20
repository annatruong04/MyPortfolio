import React from 'react'
import { skills, experiences } from '../constants'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Anna</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I'm a Computer Science student at The University of Adelaide, with a passion for creating seamless user experiences.</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className={`btn-back rounded-xl ${skill.type}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Applied Experience & Research</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>During my undergraduate studies, I undertook a data-driven research project analyzing Australia’s historical communication sector. Working closely with academic supervisors, I explored statistical patterns like Benford’s Law and visualized insights through R. 
            This experience strengthened my analytical thinking and inspired me to turn data into interactive stories—bridging the gap between research and frontend creativity.
          </p> 
          <p>I'm currently developing an interactive 3D web page to showcase key findings from this research, combining data analytics with creative frontend design.
          </p>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Projects</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I’ve worked on several projects to sharpen my frontend skills, collaborate with others, and explore creative problem-solving through design and code. 
              Here's a quick rundown of my journey so far:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{
                  background: experience.iconBg,
                }}
                contentStyle={{ 
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'noen',

                 }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppinsfont-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{ margin:0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => ( 
                    <li //return a list item for each point
                      key={`experience-point-${index}`} 
                      className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default About
