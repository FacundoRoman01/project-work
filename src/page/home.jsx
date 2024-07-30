import Hero from "../components/hero.jsx"
import CardImg from "../components/cardImg"
import Profiles from "../components/profiles.jsx"
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx";
// import HeroCarousel from "../components/heroCarousel.jsx"

const home = () => {
  return (
    <>
       <Header />
        {/* <HeroCarousel /> */}
        <Hero />
        <CardImg /> 
        <Profiles />   
        <Footer />   
    </>
  )
}

export default home