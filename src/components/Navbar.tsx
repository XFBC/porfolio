import React, { useState, useEffect } from 'react'
import { navLinks } from '../constants/mock'
import Logo from './../../public/assets/logo/logo.svg'
import { Icon } from '@iconify/react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      className={`flex md:justify-between items-center md:px-28 md:py-[2rem] py-4 px-4 navbar-bg ${
        scrolling ? 'fixed top-0 left-0 right-0 z-50 shadow-md md:py-2 py-2 navbar-bg transition-all' : ''
      }`}
    >
      <div>
        <img
          src={Logo}
          alt="logo"
          className={`w-24 mr-[60px] z-50 relative cursor-pointer ${
            scrolling ? 'w-[60px]' : ''
          }`}
        />
      </div>

      {navLinks.map(item => {
        return (
          <div
            key={item.link}
            className="md:flex justify-end items-center hidden"
          >
            <Link
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              duration={500}
              className="text-xl cursor-pointer hover:text-[#FF4820] transition ease-in-out delay-150 hover:-translate-y-1 hover:text-2xl duration-300"
            >
              {item.link}
            </Link>
          </div>
        )
      })}

      <div className="md:ml-[307px]">
        <a
          href="https://wa.me/91980157220"
          className="btn primary bg-[#FF4820] px-[26px] py-[17px] rounded-[5px] hover:bg-orange-800 font-bold hidden md:block"
        >
          {' '}
          Fale comigo
        </a>
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
          } p-[3.5rem] absolute top-20 right-0 mt-12 mx-4 my-2 min-w-[140px] rounded-xl glass_effect_navbarTogle z-[1030]`}
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
                  <a href="#" className="text-xl">
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
