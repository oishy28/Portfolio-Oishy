import Hero from "./sections/Hero.jsx"
import AppShowcase from "./sections/ShowcaseSection.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Experience from "./sections/Experience.jsx"
import TechStack from "./sections/TechStack.jsx"
import AboutMe from "./sections/AboutMe.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Artworks from "./sections/Artworks.jsx"
import MyResearch from "./sections/MyResearch.jsx"
const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    
    <AppShowcase/>
    {/* <LogoShowcase/> */}
    <AboutMe/>
    
    {/* <FeatureCards/> */}
    
    <Experience/>
    <TechStack/>
    <MyResearch/>
    <Artworks/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
