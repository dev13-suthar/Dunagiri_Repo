import "./Motivation.scss"
import pic from "../../src/assets/C1DSC03475_edited.webp"
// import card1Pic from "../assets/card1.png"
import Data from "../assets/Data.json"
import CardDisplay from "../Components/navbar/CardDisplay"
const Motivation = () => {
  return (
    <>
      <div className="mainnnn">
         <section className="container">
            <div className="picSection">
                <img src={pic} alt="" srcSet="motivation pic" />
            </div>
            <div className="right">
               <span>NO MATTER YOUR MOTIVATION, WE CAN HELP</span><br />
               <h1>Are You...</h1>
             <section className="cardsSection">
                 {Data.map((item)=><CardDisplay key={item.ans} item={item}/>)} 
             </section>
            </div>
         </section>
      </div>
    </>
  )
}

export default Motivation
