import Service from './Service'
import { ServicesMock } from './../constants/mock'

export default function Services() {
  return (
    <section className="mt-[150px]">
      <div className="grid md:grid-cols-3 grid-cols-1 ">
        <div className="">
          <div className='absolute w-[700px] h-[700px] rounded-full bg-[#07325F] blur-[250px] left-[-440px]'/>

       
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold z-40 relative ">
            Serviços
          </h1>{' '}
          <div className="text-[#FF8A71] relative">
            <p>Sou responsável por criar a parte visual de um website ou aplicativo web</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-12 relative mt-6 md:mt-0">
          {ServicesMock.map(service => (
            <Service title={service.title} text={service.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
