import "./GuestExperience.scss"

const GuestExperience = () => {
  return (
    <>
        <div className="wrapperClass">
            <div className="container">
                <div className="heading">
                    <span>OUR NUMBERS SPEAK FOR THEMSELVES</span>
                    <h2>Guests Experience Lasting Benefits</h2>
                </div>
                <div className="infoSection">
                    <section className="info">
                        <span className="percentage">30%</span>
                        <p id="desc">Decrease in anxiety while staying at Dunagiri Retreat.</p>
                    </section>
                    <section className="info">
                        <span className="percentage">26%</span>
                        <p id="desc">Improvement in sleep during and post visit.</p>
                    </section>
                    <section className="info">
                        <span className="percentage">16%</span>
                        <p id="desc">Improvement in self-compassion after a 5-night stay.</p>
                    </section>
                </div>
            </div>
        </div>
    </>
  )
}

export default GuestExperience
