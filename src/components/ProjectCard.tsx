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
    <div
      className="max-w-lg max-h-[250px]"
      data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className="w-full h-[200px]">
        <img
          src={imgUrl}
          alt="image"
          className="w-full object-cover h-[100%]"
        />
      </div>
      <div className="about-bg md:py-8 py-4 md:px-8 px-4 rounded-b-xl h-full">
        <h2 className="font-bold text-lg capitalize">{title}</h2>
        <p className="min-h-[140px]">{description}</p>

        <div className="">
          <a target="_blank" href={link}>
            Ver projeto
          </a>
        </div>
      </div>
    </div>
  )
}
