import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import SponsorsPage from './Components/Sponser'
import PrizeSection from './Components/Prizes'
import JudgesPage from './Components/Judges';

function MainLayout() {
  return (
    <>
      <Navbar/>
      <section id="home">
        <Home/>
      </section>
      <section id="prizes">
        <PrizeSection/>
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
       <section id="judges">
        <JudgesPage/>
      </section>
      <section id="sponsors">
        <SponsorsPage/>
      </section>
      <section id="faq">
        <FAQ/>
      </section>
      <Footer/>
    </>
  )
}

function CrewPage() {
  return (
    <>
      <Navbar/>
      <Crew/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/crew" element={<CrewPage />} />
      </Routes>
    </Router>
  )
}

export default App