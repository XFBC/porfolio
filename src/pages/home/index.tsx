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

export default function Home() {
  return (
    <div>
      <div className="px-[1rem] md:px-[6rem] py-[2rem] gradient__bg">
        <Navbar />
        <Header />

        <About />
        <Cta />
        <Projects />
        <Services />
        <Possibility />
      </div>

      <Footer />

      {/*
     <Brand />
      <Feautures />
      <Possibility />
      <Cta />
   
      <Footer /> */}
    </div>
  )
}
