/* eslint-disable react/prop-types */

import "./CardDisplay.scss"
const CardDisplay = ({item}) => {
  return (
    <>
        <div className="card1">
                     <img src={item.img} alt="" srcSet="" height={'85px'} width={'70px'}/>
                     <section className="questons">
                     {item.que}
                     </section><br />
                     <section className="info">
                     {item.ans}
                     </section>
         </div> 
    </>
  )
}

export default CardDisplay
