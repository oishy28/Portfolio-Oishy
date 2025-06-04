import Hero from "./sections/Hero.jsx"
import AppShowcase from "./sections/ShowcaseSection.jsx"
import NavBar from "./components/NavBar.jsx"
import LogoShowcase from "./components/LogoSection.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Experience from "./sections/Experience.jsx"
import TechStack from "./sections/TechStack.jsx"
import AboutMe from "./sections/AboutMe.jsx"
import Contact from "./sections/Contact.jsx"
const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <AboutMe/>
    <AppShowcase/>
    {/* <LogoShowcase/> */}
    <FeatureCards/>
    <Experience/>
    <TechStack/>
    <Contact/>
      
    </>
  )
}

export default App
