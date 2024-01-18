import "./Path.scss"
import picc1 from "../assets/c3-DSC03470_edited_edited.webp"
import pic2 from "../assets/DSC_0343_JPG.webp"
import Button from "../Components/navbar/Button"
import CardOfPath from "../Components/navbar/CardOfPath"
const Path = () => {
  return (
    <div className="containerForHeader">
        <header>
            <h1 id="HeaderHeading">Choose Your Path</h1>
            <span className="subHeading">Choose your transformational adventure at your own pace — join our dynamic retreat groups or come solo.</span>
        </header>
        <main>
            <section className="guided_Workshop">
                <div className="imageArea">
                    <img src={picc1} alt="" srcSet=""  height={'170px'} width={'160px'}/>
                </div>
                <h4>Guided Workshop & Retreats</h4>
                  <span className="More_Details">
                Our Guided Retreats provide an immersive experience that promotes growth, connection, and transformation. Join like-minded individuals in guided sessions focused on self-discovery and collaborative learning. Led by expert facilitators, these workshops blend structured activities with free time, fostering introspection and skill development. Ideal for those seeking personal growth, these retreats offer a supportive space for learning, ensuring you leave feeling enriched and empowered.
                </span>
                <Button>GROUP RETREATS</Button>
            </section>
            <CardOfPath Heading={'Self-Guided Explorations'} type={'SELF-GUIDED'} pic1={pic2}>
            Self-Guided Explorations offer a flexible experience for guests to celebrate, grieve, question, or transition at their own pace. It&apos;s a supportive, self-directed journey. This period is about honoring personal rhythms and desires, with healing and discovery at the core. The program, set in a beautiful landscape with a supportive community, nourishing meals, and healing practices, aims to rejuvenate and inspire guests, whether they stay for a weekend or week.
            </CardOfPath>
        </main>
    </div>
  )
}

export default Path
