import About from '../../components/About'
import Blog from '../../components/Projects'
import Brand from '../../components/Brand'
import Cta from '../../components/Cta'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Possibility from '../../components/Possibility'
import Projects from '../../components/Projects'
import Services from '../../components/Services'

import { Element } from 'react-scroll'

export default function Home() {
  return (
    <div>
       <Navbar />
      <div className="px-[1rem] md:px-[6rem] py-[2rem] gradient__bg">
       
        <Element name="Home" className="element">
          <Header />
        </Element>
        <Element name="Sobre mim" className="element">
          <About />
        </Element>

        <Cta />
        <Element name="Portfolio" className="element">
          <Projects />
        </Element>
        <Element name="Serviços" className="element">
          <Services />
        </Element>

        <Element name="Contato" className="element">
          <Possibility />
        </Element>
      </div>
      <Footer />
    </div>
  )
}


