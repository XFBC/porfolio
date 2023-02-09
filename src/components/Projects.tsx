import React from 'react'
import ProjectCard from './ProjectCard'
import Image from './../../public/assets/project.png'
import { projects } from '../constants/mock'

export default function Projects() {
  return (
    <section className="mt-36">
      <div className="bg-gradientText bg-clip-text text-transparent text-[62px] font-bold">
        <h1>
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      {/* 
      <div className="flex md:flex-row flex-col gap-[50px] mt-[100px]">
        <div className="">
          <ProjectCard
            imgUrl={Image}
            title="GPT-3 and Open  AI is the future."
            link="https://google.com.br"
          />
        </div>
        <div className="grid grid-cols-2 gap-10 flex-1">
          <ProjectCard
            imgUrl={Image}
            title="GPT-3 and Open  AI is the future."
            link="https://google.com.br"
          />
          <ProjectCard
            imgUrl={Image}
            title="GPT-3 and Open  AI is the future."
            link="https://google.com.br"
          />
          <ProjectCard
            imgUrl={Image}
            title="GPT-3 and Open  AI is the future."
            link="https://google.com.br"
          />
          <ProjectCard
            imgUrl={Image}
            title="GPT-3 and Open  AI is the future."
            link="https://google.com.br"
          />
        </div>
      </div> */}

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
