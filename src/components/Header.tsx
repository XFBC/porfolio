import React from 'react'
import avatar from './../../public/assets/avatar.png'
import SwiperStacks from './SwiperStacks'

const Header = () => {
  return (
    <section className="px-[2rem] md:px-[6rem] py-[2rem]">
      <div className="grid grid-cols-2">
        <div className="pt-[150px]">
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold">
            Olá, <br /> sou Fabricio Lopes
          </h1>{' '}
          <span className="text-[40px] text-[#81AFDD]">
            Desenvolvedor Front-end
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
