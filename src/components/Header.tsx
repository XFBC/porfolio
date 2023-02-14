import React from 'react'
import avatar from './../../public/assets/hero-image.png'
import SwiperStacks from './SwiperStacks'
import TypeWriterEffect from 'react-typewriter-effect'

const Header = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:pt-[150px] pt-14">
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold">
            Olá, <br /> sou Fabricio Lopes
          </h1>{' '}
          <span className="text-[40px] text-[#81AFDD]"></span>
          <TypeWriterEffect
            textStyle={{
              color: '#f49867',
              fontWeight: 500,
              fontSize: '30px'
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={['Desenvolvedor Front-end']}
            multiTextDelay={1000}
            typeSpeed={100}
          />
        </div>
        <div>
          <img src={avatar} alt="" className="w-[600px] " />
        </div>
      </div>

      <SwiperStacks />
    </section>
  )
}

export default Header
