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
    
    <AppShowcase/>
    {/* <LogoShowcase/> */}
    <AboutMe/>
    <FeatureCards/>
    
    <Experience/>
    <TechStack/>
    <Contact/>
    <footer className="flex-center section-padding">
      <p className="text-white-50 text-sm">
        © {new Date().getFullYear()} Oishy. All rights reserved.
      </p>
    </footer>
    </>
  )
}

export default App
