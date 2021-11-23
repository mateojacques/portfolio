import { titleStyles, infoBox } from './infoBox.module.css'
import ReactHTMLParser from 'react-html-parser'

const InfoBox = ({ title, description }) => {
  return (
    <div className={`col-12 col-sm-6 col-xl-4 ${infoBox} d-flex flex-column`}>
      <h5 className={titleStyles}>{title}</h5>
      <p>{ReactHTMLParser(description)}</p>
    </div>
  )
}

export default InfoBox
