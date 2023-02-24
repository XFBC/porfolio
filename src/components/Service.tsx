interface textProps {
  title: string
  text: string
}
export default function AboutText({ text, title }: textProps) {
  return (
    <div className={`flex md:flex-row flex-col feature-card px-6 py-6 md:ml-4   transition delay-150 duration-1000 ease-in`}>
      <div className="">
        <div className="bg-gradientBar  w-[38px] h-[3px] mb-[1rem]"></div>
        <h1 className="text-2xl md:w-[23rem] font-semibold md:mr-4">{title}</h1>
      </div>

      <div className="">
        <p className="text-[#81AFDD]">{text}</p>
      </div>

      <div></div>
    </div>
  )
}
