import React from 'react'
import Logo from './../../../public/assets/avatar.png'

const index = () => {
  return (
    <div className="px-[1rem] md:px-[6rem] py-[2rem] gradient__bg">
      <div className="flex flex-col items-center">
        <img
          src={Logo}
          alt="logo"
          className="md:w-[350px] w-auto z-50 relative  cursor-pointer"
        />
        <h1 className="font-bold text-2xl">Acesse meus links abaixo</h1>

        <div className="mt-12">
          <a
            target="_blank"
            href="https://kiwify.app/C1PXyhU?afid=8vGvUqme"
            className="inline-block bg-gradientText rounded-full px-16 py-2 text-xl font-semibold text-gray-800 mr-2 mb-2 text-center"
          >
            PLR ACADEMY <br /> (Renda Extra)
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default index
