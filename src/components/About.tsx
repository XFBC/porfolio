import React from 'react'
import { aboutText } from '../constants/mock'
import AboutText from './AboutText'

const About = () => {
  return (
    <section>
      <div className="mt-[126px] md:px-[63px] px-4 md:py-[50px] py-10 about-bg rounded-lg">
        {aboutText.map((item, index) => {
          if (item.id === 1) {
            return (
              <AboutText
                text={item.text}
                title={item.title}
                className="flex flex-col"
              />
            )
          }
        })}
        <div className="pt-[90px]">
          <h1 className="bg-gradientText bg-clip-text text-transparent text-[44px] font-bold">
            The possibilities are <br /> beyond your imagination
          </h1>
        </div>

        <div className="pt-[90px] grid grid-cols-1 md:grid-cols-4 gap-[42px]">
          {aboutText.map((item, index) => {
            if (item.id != 1) {
              return (
                <AboutText
                  text={item.text}
                  title={item.title}
                  className="flex flex-col"
                />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default About
