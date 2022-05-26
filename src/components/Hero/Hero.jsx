import { hero, copy, copy_cta } from './hero.module.css'
import profile from '../../assets/render.png'
import cv from '../../assets/cv.pdf'

const Hero = () => {
  return (
    <div
      id='hero'
      className={`${hero} container pt-3 px-4 d-flex align-items-center`}
    >
      <div className={`${copy} w-100 d-flex flex-column`}>
        <h2>
          I'm Mateo, <span>Frontend Web Developer</span>.
        </h2>
        <p>
          I have a passion for writing clean and concise code that, in
          conjuction with a good understanding of web design principles, allows
          me to create work that I'm proud of. <br /> I <b>always</b> keep
          learning (and <b>always</b> will).
        </p>
        <div className={`d-flex align-items-center`}>
          <a href={cv} className={`${copy_cta} btn`} download='Mateo Jacques CV'>
            Download CV <i className='bi-download ms-3'></i>{' '}
          </a>
          <ul className='d-flex m-0'>
            <li>
              <a
                href='https://www.linkedin.com/in/mateoleonjacques/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='bi-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/mateojacques'
                target='_blank'
                rel='noreferrer'
              >
                <i className='bi-github'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <img src={profile} alt='Mateo Jacques - Front End Developer' />
    </div>
  )
}

export default Hero
