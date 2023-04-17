import React from 'react'

import Logo from './../../public/assets/logo/logo.svg'
import { navLinks } from '../constants/mock'
import SocialLinks from './SocialLinks'

import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <section className="mt-[150px] bg-[#031B34]">
      <footer className="md:px-52 px-4 pt-44">
        <div className="text-center">
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[24px] md:text-[32px] font-bold">
            "Desenvolvedor Front-End apaixonado por construir experiências
            incríveis na web"
          </h1>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 mt-[150px] md:text-start text-center gap-20">
          <div className="flex flex-col items-center">
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

        <div className="text-center mt-20">
          <p>© 2023 FBC. Todos os direitos reservados</p>
        </div>
        <a href="https://github.com/XFBC/porfolio" target="_blank">
          <div className="flex justify-center pb-7 flex-row items-center gap-2 mt-4  transition delay-150 duration-300 ease-in-out hover:-translate-z-1 hover:scale-110 text-gray-600 hover:text-white">
            <Icon icon="el:github" className="text-4xl " />
            Código fonte
          </div>
        </a>
      </footer>
    </section>
  )
}
