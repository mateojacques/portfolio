import {titleStyles} from "./sectionTitle.module.css"

const SectionTitle = ({title}) => {
 return (
  <h1 className={`${titleStyles}`}>
   {title}
  </h1>
 )
}

export default SectionTitle
