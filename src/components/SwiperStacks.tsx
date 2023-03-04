import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper'
import Stacks from './Stacks'

import { stacks } from '../constants/mock'
import Marquee from 'react-fast-marquee'

export default function App() {
  return (
    <div className="md:mt-[70px] mt-8">
      
      <Marquee gradient={false} speed={80} delay={10}>
        <Stacks />
      </Marquee>
    </div>
  )
}
