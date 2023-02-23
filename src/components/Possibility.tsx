import Avatar from './../../public/assets/hero-image.png'
import SocialLinks from './SocialLinks'

export default function Possibility() {
  return (
    <section className="md:mt-40 mt-20">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="pb-6 md:pb-0 px-4">
          <img src={Avatar} alt="w-[200px] " />

          <div className="md:hidden block">
            <SocialLinks />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-[#71E5FF]">
            Request Early Access to Get Started
          </span>
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[34px] font-bold">
            The possibilities are beyond your imagination
          </h1>{' '}
          <p className="text-[#81AFDD]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="mt-2 hidden md:block">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
