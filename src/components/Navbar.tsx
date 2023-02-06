import React, { useState } from 'react'
import { navLinks } from '../constants/mock'
import Logo from './../../public/assets/logo/logo.svg'
import { Icon } from '@iconify/react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <section className="flex md:justify-between items-center px-[2rem] md:px-[6rem] py-[2rem] ">
      <div>
        <img src={Logo} alt="logo" className="w-24 mr-[60px]" />
      </div>

      {navLinks.map(item => {
        return (
          <div className="md:flex md:flex-1 justify-start items-center hidden">
            <a href="">{item.title}</a>
          </div>
        )
      })}

      <div className="md:ml-[307px]">
        <button className="btn primary bg-[#FF4820] px-[26px] py-[17px] rounded-[5px] hover:bg-orange-800 font-bold">
          {' '}
          Fale comigo
        </button>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 h-7 object-contain"
          onClick={() => setToggle(prev => !prev)}
        /> */}

        <div className="navbar-toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <Icon icon="line-md:close" className="text-2xl" />
          ) : (
            <Icon icon="ri:menu-3-fill" className="text-2xl" />
          )}
        </div>

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-8 absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl glass_effect_navbarTogle`}
        >
          {' '}
          {navLinks.map(item => {
            return (
              <div className="list-none flex justify-center items-start flex-col w-[160px] text-xl">
                <a href="">{item.title}</a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Navbar
