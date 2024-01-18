import Navbar from "../Components/navbar/Navbar"
import "./Header.scss"
const Header = () => {
  return (
    <>
    <Navbar/>
    <div className='header_content'>
        <div className="info">
            <section className="box">
              <main className="content">              <h1><center>Dunagiri Retreat</center></h1>
              <p>Experience serenity and divinity steps away from Mahavatar Babaji&apos;s Cave in the Himalayas</p>

              <button id="Button">Enquire Now</button>
              </main>
            </section>
        </div>
    </div>
    </>
  )
}

export default Header
