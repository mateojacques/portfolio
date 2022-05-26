import { footer, logo, links } from './footer.module.css'

const Footer = () => {
  return (
    <section
      className={`${footer} container d-flex justify-content-center align-items-center`}
    >
      <div className='d-flex flex-column align-items-center'>
        <h1 className={`${logo} mb-4`}>Jacques</h1>
        <ul
          className={`${links} w-100 d-flex m-0  p-0 d-flex justify-content-evenly`}
        >
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
    </section>
  )
}

export default Footer
