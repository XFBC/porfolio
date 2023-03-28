import React from 'react'

import { Icon } from '@iconify/react'

const Cta = () => {
  return (
    <section
      className="w-full bg_cta mt-[150px] rounded-[10px] px-[40px] py-[50px]"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className="flex md:flex-row flex-col justify-between text-black items-center">
        <h2 className="font-semibold text-xl">
          Baixe agora mesmo meu currículo e descubra como <br /> posso
          contribuir para o sucesso de sua empresa.
        </h2>
        <a
          href="/assets/curriculo.pdf"
          target="_blank"
          className="bg-black text-[#FFFF] px-[40px] py-[14px] rounded-[40px] md:mt-0 mt-4 flex flex-row items-center gap-2 hover:bg-gray-900"
        >
          <Icon icon="mdi:file-document-check-outline" className="text-2xl" />
          Curriculum Vitae
        </a>
      </div>
    </section>
  )
}

export default Cta
