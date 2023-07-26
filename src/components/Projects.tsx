import React from 'react'
import ProjectCard from './ProjectCard'
import Image from './../../public/assets/project.png'
import { projects } from '../constants/mock'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

export default function Projects() {
  const [prismicProjects] = useAllPrismicDocumentsByType<any>('projeto')
  console.log(prismicProjects)
  return (
    <section className="mt-36 b-6">
      <div
        className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h1>Projetos</h1>
      </div>

      <div className="flex md:flex-row flex-col gap-[50px] mt-[100px]">

        <div
          className="grid md:grid-cols-3 grid-cols-1 gap-[15rem] md:gap-6"
        
        >
          {prismicProjects?.map((item, index) => {
            return (
              <ProjectCard
                imgUrl={item.data.image.url}
                title={item.data.title}
                link={item.data.project.url}
                description={item.data.description}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
