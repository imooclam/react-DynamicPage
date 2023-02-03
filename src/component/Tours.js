import Title from "./Title"

import { tour } from "../pageLink"


const Tours = () => {
  return (
    
     <section className="section" id="tours">
    
      <Title title="featured" subtitle="tours"/>

      <div className="section-center featured-center">
    {tour.map(el=>{
      const{id ,img ,date ,title,text, days,cost,map}=el
      return(

        <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt="img" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
           {text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>{map}</p>
              <p>{days}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article>

      )

    })}

      
      </div>
    </section>

  )
}
export default Tours