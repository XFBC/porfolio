import React from 'react'
import ProjectCard from './ProjectCard'
import Image from './../../public/assets/project.png'
import { projects } from '../constants/mock'

export default function Projects() {
  return (
    <section className="mt-36">
      <div className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold">
        <h1>Projetos</h1>
      </div>

      <div className="flex md:flex-row flex-col gap-[50px] mt-[100px]">
        {projects.map((item, index) => {
          if (item.id === 1) {
            return (
              <div className="">
                <ProjectCard
                  imgUrl={item.image.url}
                  title={item.title}
                  link={item.link.url}
                  description="lorem ipsum dolor simet"
                />
              </div>
            )
          }
        })}
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
