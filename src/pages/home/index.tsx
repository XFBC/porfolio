import About from '../../components/About'
import Blog from '../../components/Blog'
import Brand from '../../components/Brand'
import Cta from '../../components/Cta'
import Feautures from '../../components/Feautures'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Possibility from '../../components/Possibility'

export default function Home() {
  return (
    <div className="px-[2rem] md:px-[6rem] py-[2rem] gradient__bg">
      <div className="">
        <Navbar />
        <Header />
      </div>
      <About />

      {/*
     <Brand />
      <Feautures />
      <Possibility />
      <Cta />
      <Blog />
      <Footer /> */}
    </div>
  )
}
