import React, { useState } from 'react'
import { navLinks } from '../constants/mock'
import Logo from './../../public/assets/logo/logo.svg'
import { Icon } from '@iconify/react'

import { Link } from 'react-scroll'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <section className="flex md:justify-between items-center md:pr-[6rem] py-[2rem]">
      <div>
        <img src={Logo} alt="logo" className="w-24 mr-[60px] z-50 relative" />
      </div>
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[#07325F] blur-[250px] left-[-440px]" />

      {navLinks.map(item => {
        return (
          <div className="md:flex justify-end  items-center hidden">
            <Link
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              duration={500}
            >
              <a
                href=""
                className="text-xl hover:text-[#FF4820] transition ease-in-out delay-150 hover:-translate-y-1 hover:text-2xl  duration-300"
              >
                {item.link}
              </a>
            </Link>
          </div>
        )
      })}

      <div className="md:ml-[307px]">
        <button className="btn primary bg-[#FF4820] px-[26px] py-[17px] rounded-[5px] hover:bg-orange-800 font-bold hidden md:block">
          {' '}
          Fale comigo
        </button>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="navbar-toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <Icon icon="line-md:close" className="text-4xl" />
          ) : (
            <Icon icon="ri:menu-3-fill" className="text-4xl" />
          )}
        </div>

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-[3.5rem] absolute top-20 right-0 mt-12 mx-4 my-2 min-w-[140px] rounded-xl glass_effect_navbarTogle z-40`}
        >
          {' '}
          <ul className="list-none flex justify-center items-center flex-col  mx-8">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursos-pointer text-[16px] text-white mb-2`}
              >
                <a></a>
                <Link
                  activeClass="active"
                  to={nav.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <a href="" className="text-xl">
                    {nav.link}
                  </a>
                </Link>
              </li>
            ))}
          </ul>{' '}
        </div>
      </div>
    </section>
  )
}

export default Navbar
