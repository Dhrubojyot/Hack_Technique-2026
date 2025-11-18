import './App.css'
import Home from './Components/Home'
import AboutPage from './Components/About'
import TimelineWithBackground from './Components/Timeline'
import TracksPage from './Components/Theme'
import Venue from './Components/Venue'
import Navbar from './Components/Navbar'
import Crew from './Components/Crew'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <section id="home">
        <Home/>
      </section>
      <section id="about">
        <AboutPage/>
      </section>
      <section id="timeline">
        <TimelineWithBackground/>
      </section>
      <section id="tracks">
        <TracksPage/>
      </section>
      <section id="venue">
        <Venue/>
      </section>
      <section id="faq">
        <FAQ/>
      </section>
      <Footer/>
    </>
  )
}

export default App