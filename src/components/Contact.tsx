import { Client } from '@prismicio/client'
import React, { useState } from 'react'

const Contact = () => {
  return (
    <div className="mt-36">
      {/* <div className="absolute w-[700px] h-[700px] rounded-full bg-[#07325F] blur-[250px] left-[80%]" /> */}
      <div
        className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h1>Fale comigo</h1>
      </div>

      <div className="text-white md:grid md:grid-cols-2 flex flex-col-reverse  items-center">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            value=""
            className="bg-transparent border-white border rounded w-2/3 text-white px-2 py-2"
            placeholder="Nome"
          />

          <input
            type="email"
            name="email"
            className="bg-transparent border-white border rounded w-2/3 text-white px-2 py-2"
            placeholder="E-mail"
          />

          <input
            type="text"
            name="telefone"
            className="bg-transparent border-white border rounded w-2/3 text-white px-2 py-2"
            placeholder="Telefone"
          />

          <div className="w-1/4">
            <button
              type="submit"
              className="btn primary bg-[#FF4820] px-[26px] py-[17px] rounded-[5px] hover:bg-orange-800 font-bold hidden md:block"
            >
              Fale comigo
            </button>
          </div>
        </div>

        <div>
          <img src="/assets/contact.svg" alt="#" width={500} />
        </div>
      </div>
    </div>
  )
}

export default Contact
