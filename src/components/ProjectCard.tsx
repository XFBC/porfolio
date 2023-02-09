import { projects } from '../constants/mock'

interface cardProps {
  imgUrl: string
  title: string
  link: string
}
export default function ProjectCard({ imgUrl, title, link }: cardProps) {
  const filteredProjects = projects.filter(item => item.type === 'react')

  console.log(filteredProjects)
  return (
    <div className="max-w-lg">
      <div>
        <img src={imgUrl} alt="image" className="w-full h-[100%]" />
      </div>
      <div className="bg-[#042C54] py-8 px-8 rounded-b-xl">
        <h2 className="font-bold text-lg capitalize">{title}</h2>

        <div className="pt-10">
          <a target="_blank" href={link}>
            Ver projeto
          </a>
        </div>
      </div>
    </div>
  )
}
