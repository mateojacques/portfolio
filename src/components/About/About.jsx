import { useState, useEffect } from 'react'
import { skillStyles, skillsContainer, subtitle } from './about.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import InfoBox from '../InfoBox/InfoBox'
import axios from 'axios'

const About = () => {
  const [stack, setStack] = useState([])

  useEffect(() => {
    async function fetchStack() {
      await axios
        .get('https://jacques-portfolio-api.herokuapp.com/api/stack')
        .then((res) => setStack(res.data.data))
        .catch((err) => console.log(err))
      return
    }

    fetchStack()
  }, [])

  useEffect(() => {
    console.log(stack)
  }, [stack])

  return (
    <section id='about' className='container'>
      <SectionTitle title='About me' />
      <div
        className='w-100 d-flex flex-wrap justify-content-center align-items-center bg-light py-4 px-2'
        style={{ gap: '50px 0' }}
      >
        <InfoBox
          title='Education'
          description={
            'Web Development (Self-taught)<br/>Software Engineering (In progress)'
          }
        />
        <InfoBox
          title='Skills'
          description={
            'UI Development<br/>REST API Development<br/>Design Translation'
          }
        />
        <InfoBox title='Experience' description={'2+ years'} />
      </div>

      <div className='my-5 w-100 d-flex flex-column'>
        <h3 className={`${subtitle} mb-5 mx-auto`}>My stack</h3>
        <div className={`${skillsContainer} w-100 align-items-center mx-auto`}>
          {stack.length > 0 &&
            stack.map((skill, index) => (
              <div
                className='w-100 h-100 p-3 d-flex justify-content-center align-items-center'
                style={{
                  backgroundColor: index % 2 === 0 ? '#e9e9e9' : '#f3f3f3',
                }}
              >
                <img
                  src={skill.image}
                  key={skill.name}
                  className={skillStyles}
                  alt={skill.name}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default About
