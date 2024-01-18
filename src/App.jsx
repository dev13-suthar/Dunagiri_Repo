// import Cover from "./Components/navbar/Cover"
// import Navbar from "./Components/navbar/Navbar"

import About from "./ui/About"
import Featured from "./ui/Featured"
import GuestExperience from "./ui/GuestExperience"
import Header from "./ui/Header"
import Motivation from "./ui/Motivation"
import Path from "./ui/Path"
import Reconnect from "./ui/Reconnect"

const App = () => {
  return (
    <div className="Wrapper">
      <Header/>
      <Featured/>
      <About/>
      <Reconnect/>
      <Motivation/>
      <GuestExperience/>
      <Path/>
    </div>
  )
}

export default App
