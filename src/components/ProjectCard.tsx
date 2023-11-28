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
      className=""
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
      <div className="about-bg md:py-8 py-4 md:px-8 px-4 rounded-b-xl h-[240px]">
        <h2 className="font-bold text-lg capitalize">{title}</h2>
        <p className="min-h-[140px]">{description}</p>

        <a target="_blank" href={link} className='inline-block bg-gradientText rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2'>
          Ver projeto
        </a>
      </div>

      {/* <a target="_blank" href={link}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full object-cover h-[240px]"
            src={imgUrl}
            alt="Sunset in the mountains"
          />
          <div className="about-bg md:py-8 py-4 md:px-8 px-4 rounded-b-xl h-[280px]">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-400 text-base">{description}</p>

            <div className=" pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </a> */}
    </div>
  )
}
