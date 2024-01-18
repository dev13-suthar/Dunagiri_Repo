import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className="wrapperclass">
      <nav>
        <ul className="uls">
          <li>ABOUT US</li>
          <li>ACCOMODATIONS</li>
          <li>RETREATS</li>
          <li>ACTIVITIES</li>
          <li>GALLERY</li>
          <li>BLOG</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
      <nav className="Hamnav">
      <ul className="UlHamburger">
            <li>Left</li>
            <li>logo</li>
            <li>Call</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
