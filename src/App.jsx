import Hero from "./sections/Hero.jsx"
import AppShowcase from "./sections/ShowcaseSection.jsx"
import NavBar from "./components/NavBar.jsx"
import LogoShowcase from "./components/LogoSection.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Experience from "./sections/Experience.jsx"
const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <AppShowcase/>
    {/* <LogoShowcase/> */}
    <FeatureCards/>
    <Experience/>
    </>
  )
}

export default App
