import Avatar from './../../public/assets/avatar-2.svg'
export default function Possibility() {
  return (
    <section className="md:mt-40 mt-20">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <img src={Avatar} alt="" />
        </div>

        <div className="flex flex-col justify-end">
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
        </div>
      </div>
    </section>
  )
}
