import React from 'react'

import Logo from './../../public/assets/logo/logo.svg'
import { navLinks } from '../constants/mock'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <section className="mt-[150px] bg-[#031B34]">
      <footer className="md:px-52 px-4 pt-44">
        <div className="text-center">
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold">
            Do you want to step in to the future before others
          </h1>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 mt-[150px] md:text-start text-center">
          <div className="flex items-center md:block mb-8 md:mb-0 flex-col  ">
            <img src={Logo} alt="" className="w-40 mb-4" />

            <SocialLinks />
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <a href="#">{link.link}</a>
            ))}
          </div>
          <div className="mt-8 md:mt-0">
            <span className="font-semibold">Endereço</span>
            <p>Av. Gentil Bittencourt, 2377 </p>
          </div>
        </div>

        <div className="text-center mt-20 pb-7">
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
