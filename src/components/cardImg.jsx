import imgAbout from "../img/aboutme-1.png";
import imgProfesional from "../img/professional-desktop.jpg";
import "../style/card-img.css"

const cardImg = () => {
    return (

        <section className="segund-section">
            <div>

                <img className="img-about-primer" src={imgAbout} alt="" />

                <div className="descrption">
                    <p>Create a page to present who you are and what you  <br /> do in one link.</p>
                </div>

            </div>

            <div className="tercer-div">
                <div className="image-container">
                    <img className="img-about-primer" src={imgProfesional} alt="Professional" />
                </div>
                <div className="description-imgProfesional">
                    <h2>Professional</h2>
                    <p>Take control and centralize your online presence. </p>
                </div>
            </div>

        </section>
    )
}

export default cardImg