import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { stacks } from '../constants/mock'

export default function App() {
  return (
    <div className="mt-[70px] ">
      <Swiper
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        className="mySwiper"
      >
        {stacks.map(stack => (
          <SwiperSlide>
            <img src={stack.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
