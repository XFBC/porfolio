import React from 'react'
import avatar from './../../public/assets/hero-image.png'
import SwiperStacks from './SwiperStacks'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="pt-[150px]">
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold">
            Olá, <br /> sou Fabricio Lopes
          </h1>{' '}
          <span className="text-[40px] text-[#81AFDD]">
            <Typewriter
              words={['Desenvolvedor Front-end']}
              loop={4}
              typeSpeed={150}
              cursor
            />
          </span>
        </div>
        <div>
          <img src={avatar} alt="" className="w-[600px]" />
        </div>
      </div>

      <SwiperStacks />
    </section>
  )
}

export default Header
