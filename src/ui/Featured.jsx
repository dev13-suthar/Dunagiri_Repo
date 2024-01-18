import { useState } from "react"
import "./Featured.scss"
const Featured = () => {
  const [slide, setslide] = useState(0);

  const prevSlide = ()=>{
    setslide(slide===0?2:(prev)=>prev-1)
  }
  const nextSlide = ()=>{
    setslide(slide===2?0:(prev)=>prev+1);
  }
  return (
    <>
    <div className="Featured">
        <h1 onClick={onclick}><center>As Featured In</center></h1>
        <div className="wrapper">
            <div className="slider">
                <div className="container" style={{transform:`translateX(-${slide*100}vw)`}}>
                  <div className="wrapper2">
                    <div className="box1">
                        <center><h1>travel</h1></center> 
               <p>Glittering peaks and vivid landscapes create an environment that can calm the most unsettled of hearts</p>
                        
                      <a href="http://">Jimmy Reddy</a>
                    </div>
                    <div className="box1">
                      <center><h1>Traveller</h1></center>
                      <p>
                      Time and global warming notwithstanding, the stories frame Dunagiri, a place lush with natural and mythological lore.</p>

                      <a href="http://">Disha, Outlook Traveller</a>
                      
                    </div>
                    <div className="box1">
                      <center><h1>TripAdvisor</h1></center>
                      <p>
                      (Dunagiri Retreat) A place of warmth, bliss, solitude, and delicious food!
                      </p>
                      <a href="http://">xxy</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <section className="bottom">
        <button onClick={prevSlide}>&larr;</button>
        <button onClick={nextSlide}>&rarr;</button>
        </section>
    </div><hr />
   </> 
  )
}

export default Featured
