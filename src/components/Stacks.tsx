import React from 'react'

import { stacks } from '../constants/mock'
const Stacks = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-row">
        {stacks.map(stack => (
          <div className='relative xs:w-[210px] w-[170px] xs:mx-10 mx-5 xs:my-5 my-2  cursor-pointer flex justify-center '>
            <img
              src={stack.image}
              alt=""
              className="md:w-24 w-16 grayscale-[1] hover:grayscale-0  transition delay-100"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stacks
