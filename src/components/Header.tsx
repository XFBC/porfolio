import React from 'react'
import avatar from './../../public/assets/hero-image.png'
import SwiperStacks from './SwiperStacks'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:pt-[150px] mt-10">
          <h1 className="bg-gradientText bg-clip-text text-transparent md:text-[62px] text-[40px] font-bold">
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
        <div className='mt-5'>
          <img src={avatar} alt="" className="w-[600px]" />
        </div>
      </div>

      <SwiperStacks />
    </section>
  )
}

export default Header
