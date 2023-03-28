import React from 'react'
import avatar from './../../public/assets/hero-image-2.webp'
import SwiperStacks from './SwiperStacks'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <section className="md:mt-24">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className=" md:w-[480px]"data-aos="zoom-in">
          <motion.div
            className="container"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <img src={avatar} alt="w-[50px]" className="" />
          </motion.div>
        </div>

        <div className="mt-5">
          <div className="md:pt-[150px] mt-10 h-[255px] md:h-auto" data-aos="zoom-in">
            <h1 className="bg-gradientText bg-clip-text text-transparent md:text-[62px] text-[40px] font-bold relative">
              Olá, <br className="md:hidden hidden" /> sou <br /> Fabricio Lopes
            </h1>{' '}
            <span className="text-[40px] text-[#81AFDD]">
              <Typewriter
                words={['Desenvolvedor Front-end']}
                loop={100}
                typeSpeed={150}
                cursor
              />
            </span>
          </div>
        </div>
      </div>

      <SwiperStacks />
    </section>
  )
}

export default Header
