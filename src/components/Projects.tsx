import React from 'react'
import ProjectCard from './ProjectCard'
import Image from './../../public/assets/project.png'
import { projects } from '../constants/mock'
import { useSinglePrismicDocument } from '@prismicio/react'

export default function Projects() {
  const [document] = useSinglePrismicDocument('projeto')
  console.log(document)
  return (
    <section className="mt-36">
      <div className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold">
        <h1>Projetos</h1>
      </div>

      <div className="flex md:flex-row flex-col gap-[50px] mt-[100px]">
        {document?.data.type === 'react-um' ? (
          <ProjectCard
            imgUrl={document?.data.image.url}
            title={document?.data.image.title}
            link={document?.data.project.url}
            description={document?.data.description}
          />
        ) : (
          ''
        )}

        <div className="grid grid-cols-2 gap-10 flex-1">
          {projects.map((item, index) => {
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
          })}
        </div>
      </div>
    </section>
  )
}
