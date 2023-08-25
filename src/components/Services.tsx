import Service from './Service'
import { ServicesMock } from './../constants/mock'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useEffect, useState } from 'react'

export default function Services() {
  const [prismicService] = useAllPrismicDocumentsByType<any>('servico')

  // console.log(prismicService)
  return (
    <section className="mt-[320px]">
      <div className="grid md:grid-cols-3 grid-cols-1 ">
        <div
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[#07325F] blur-[250px] left-[-440px]" />
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold z-40 relative ">
            Serviços
          </h1>{' '}
          
          <div className="text-[#FF8A71] relative">
            <p>
              Sou responsável por criar a parte visual de um website ou
              aplicativo web
            </p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-12 relative mt-6 md:mt-0">
          {/* {ServicesMock.map(service => (
            <Service title={service.title} text={service.text} />
          ))} */}

          {prismicService?.map(item => (
            <div
              className={`flex md:flex-row flex-col feature-card px-6 py-6 md:ml-4   transition delay-150 duration-1000 ease-in`}
            >
              <div
                data-aos="zoom-in-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <div className="bg-gradientBar  w-[38px] h-[3px] mb-[1rem]"></div>
                <h1 className="text-2xl md:w-[23rem] font-semibold md:mr-4">
                  {item.data.title[0].text}
                </h1>
              </div>

              <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <p className="text-[#81AFDD]">{item.data.text}</p>
              </div>

              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
