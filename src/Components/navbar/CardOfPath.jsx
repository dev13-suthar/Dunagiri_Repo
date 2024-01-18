/* eslint-disable react/prop-types */
import Button from "./Button"
import "./CardOfPath.scss"

const CardOfPath = ({children,pic1,Heading,type}) => {
  return (
   <>
    <main>
            <section className="guided_Workshop">
                <div className="imageArea">
                    <img src={pic1} alt="" srcSet=""  height={'170px'} width={'160px'}/>
                </div>
                <h4>{Heading}</h4>
                  <span className="More_Details">
                    {children}
                </span>
                <Button>{type}</Button>
            </section>
            <section className="selfGuide">
            </section>
        </main>
   </>
  )
}

export default CardOfPath
