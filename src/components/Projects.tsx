import React from 'react'
import ProjectCard from './ProjectCard'
import Image from './../../public/assets/project.png'
import { projects } from '../constants/mock'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

export default function Projects() {
  const [prismicProjects] = useAllPrismicDocumentsByType<any>('projeto')
  console.log(prismicProjects)
  return (
    <section className="mt-36">
      <div className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold">
        <h1>Projetos</h1>
      </div>

      <div className="flex md:flex-row flex-col gap-[50px] mt-[100px]">
        {/* {prismicProjects?.data.type === 'react-um' ? (
          <ProjectCard
            imgUrl={prismicProjects?.data.image.url}
            title={prismicProjects?.data.image.title}
            link={prismicProjects?.data.project.url}
            description={prismicProjects?.data.description}
          />
        ) : (
          ''
        )} */}

        {prismicProjects?.map((item, index) => {
          if (index === 0) {
            return (
              <ProjectCard
                imgUrl={item.data.image.url}
                title={item.data.title}
                link={item.data.project.url}
                description={item.data.description}
              />
            )
          }
        })}

        <div className="grid grid-cols-2 gap-10 flex-1">
          {prismicProjects?.map((item, index) => {
            if (index > 0) {
              return (
                <ProjectCard
                  imgUrl={item.data.image.url}
                  title={item.data.title}
                  link={item.data.project.url}
                  description={item.data.description}
                />
              )
            }
          })}
          {/* {projects.map((item, index) => {
            if (item.id > 1) {
              return (
                <ProjectCard
                  imgUrl={item.image.url}
                  title={item.title}
                  link={item.link.url}
                  description="lorem ipsum dolor simet"
                />
              )
            }
          })} */}
        </div>
      </div>
    </section>
  )
}
