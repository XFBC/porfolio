import ProgressBar from './ProgressBar'

interface textProps {
  className: string
  title: string
  text: string
}
export default function AboutText({ text, title, className }: textProps) {
  return (
    <div className={className} >
      <div>
        <div className="bg-gradientBar w-[38px] h-[3px] mb-[1rem]"></div>
        <h1 className="text-2xl  font-semibold">{title}</h1>
      </div>

      <div className="">
        <p className="text-[#81AFDD]">{text}</p>
      </div>

      <div></div>
    </div>
  )
}
