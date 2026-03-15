import Navbar from "./componets/Navbar"
import './App.css'
import Hero from "./componets/Hero"
import About from "./componets/secondHero"
import Hero2 from "./componets/Hero2"
import Services from "./componets/Services"
import Portfolio from "./componets/Portfolio"
import TestimonialCarousel from "./componets/Testimonials"
import ContactSection from "./componets/contact"


function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <Hero2/>
     <About/>
     <Services/>
     <Portfolio/>
     <TestimonialCarousel/>
     <ContactSection/>
    </>
  )
}

export default App
