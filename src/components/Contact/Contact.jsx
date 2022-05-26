import { labelStyles, contact } from './contact.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const Contact = () => {
  return (
    <section id='contact' className={`${contact} container d-flex flex-column mb-5`}>
      <SectionTitle title='Contact me' />

      <p className='pb-2'>
        Feel free to contact me for job opportunities using my social links on
        the <a href='#hero'>top of the page</a>, or fill in this form that I've
        built and I will get back at you as soon as possible.
      </p>

      <form
        name='contact'
        className='col-12 col-md-6 mx-auto py-5 px-4 px-md-5 text-light d-flex flex-column'
        method='post'
      >
        <input type='hidden' name='form-name' value='contact' />
        <label className={labelStyles} htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          placeholder='John Doe'
          name='name'
          className='form-control mb-4'
        />
        <label className={labelStyles} htmlFor='email'>
          E-mail
        </label>
        <input
          type='email'
          placeholder='john@company.com'
          name='email'
          className='form-control mb-4'
        />
        <label className={labelStyles} htmlFor='subject'>
          Subject
        </label>
        <input
          type='text'
          placeholder='Work Opportunity'
          name='subject'
          className='form-control mb-4'
        />
        <label className={labelStyles} htmlFor='Message'>
          Message
        </label>
        <textarea
          className='form-control mb-4'
          placeholder="Hi! I'm John Doe from Company and we want to work with you."
          style={{ minHeight: 200 }}
        ></textarea>
        <button type='submit' className='btn'>
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
