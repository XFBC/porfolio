import { projects } from '../constants/mock'

interface cardProps {
  imgUrl: string
  title: string
  link: string
  description: string
}

// const filteredProjects = projects.filter(item => item.type === 'react')

// console.log(filteredProjects)

export default function ProjectCard({
  imgUrl,
  title,
  link,
  description
}: cardProps) {
  return (
    <div className="max-w-lg">
      <div className="">
        <img src={imgUrl} alt="image" className="w-full h-[100%]" />
      </div>
      <div className="about-bg py-8 px-8 rounded-b-xl">
        <h2 className="font-bold text-lg capitalize">{title}</h2>
        <p>{description}</p>

        <div className="pt-20">
          <a target="_blank" href={link}>
            Ver projeto
          </a>
        </div>
      </div>
    </div>
  )
}
