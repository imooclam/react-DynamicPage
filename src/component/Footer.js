import { pageLink ,socialLink } from "../pageLink"

const Footer = () => {
  return (
   <footer className="section footer">
      <ul className="footer-links"  >
        
          {pageLink.map(link =>{
            const{href,text,id}=link
            return(
          <li key={id}>
            <a href={href} className="footer-link"> {text} </a>
          </li>
        
        )})}
        </ul>
          
      <ul className="footer-icons">
       {socialLink.map(social=>{
            const{id, href,classes}=social
            return (

          <li key={id}>
            <a href= {href} target="_blank" className="footer-icon" rel="noreferrer"
              ><i className={classes}></i
            ></a>
          </li>
            )
          })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer