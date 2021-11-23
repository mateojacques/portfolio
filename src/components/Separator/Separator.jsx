import {line, separator, circle} from './separator.module.css'

const Separator = () => {
 return (
  <div className={`${separator} container d-flex align-items-center my-5`}>
   <div className={`${line} w-50`}></div>
   <div className={`${circle}`}></div>
   <div className={`${line} w-50`}></div>
  </div>
 )
}

export default Separator
