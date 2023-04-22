import Avatar from './../../public/assets/hero-image.png'
import SocialLinks from './SocialLinks'

export default function Possibility() {
  return (
    <section className="md:mt-40 mt-20">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div
          className="pb-6 md:pb-0 px-4"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={Avatar} alt="w-[200px] " />

          <div className="md:hidden block">
            <SocialLinks />
          </div>
        </div>

        <div
          className="flex flex-col justify-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {/* <span className="text-[#71E5FF]">
          Obrigado por visitar o meu portfólio!
          </span> */}
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[34px] font-bold">
            Obrigado por visitar o meu portfólio!
          </h1>{' '}
          <p className="text-[#81AFDD]">
            Espero que tenha gostado ! Siga-me nas redes sociais. Lá, eu
            compartilho as minhas últimas criações e atualizações. Além disso,
            se você tiver algum projeto em mente ou quiser entrar em contato
            comigo para discutir uma colaboração, por favor, não hesite em
            enviar uma mensagem.
          </p>
          <div className="mt-2 hidden md:block">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
