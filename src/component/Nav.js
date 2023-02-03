import logo from "../images/logo.svg"
import { pageLink ,socialLink } from "../pageLink"

const Nav = () => {
  return (
     <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*  left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">

          {pageLink.map(link =>{
            const{href,text}=link
            return(
          <li>
            <a href={href} className="nav-link"> {text} </a>
          </li>

            )
          })}


          
        </ul>

        <ul className="nav-icons">

          {socialLink.map(social=>{
            const{id, href,classes}=social
            return (

          <li key={id}>
            <a href= {href} target="_blank" className="nav-icon" rel="noreferrer"
              ><i className={classes}></i
            ></a>
          </li>
            )
          })}
          
        </ul>
      </div>
    </nav>
  )
}
export default Nav