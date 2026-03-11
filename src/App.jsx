import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Impact from './components/Impact'
import Messages from './components/Messages'
import Achievements from './components/Achievements'
import Legacy from './components/Legacy'
import FinalTribute from './components/FinalTribute'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#020510] text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Impact />
        <Messages />
        <Achievements />
        <Legacy />
        <FinalTribute />
      </main>
      <Footer />
    </div>
  )
}

export default App
