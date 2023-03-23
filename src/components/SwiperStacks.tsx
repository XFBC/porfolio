import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Stacks from './Stacks'
import Marquee from 'react-fast-marquee'

export default function App() {
  return (
    <div className="md:mt-[70px] mt-8">
      <Marquee gradient={false} speed={80}>
        <Stacks />
      </Marquee>
    </div>
  )
}
