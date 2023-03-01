import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper'

import { stacks } from '../constants/mock'

export default function App() {
  return (
    <div className="mt-[70px] md:mx-16">
      <Swiper
        autoplay={{
          delay: 1500
        }}
        slidesPerView={'auto'}
        modules={[Autoplay]}
        breakpoints={{
          350: {
            slidesPerView: 3,
            spaceBetween: 2
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        className="mySwiper"
      >
        {stacks.map(stack => (
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src={stack.image}
                alt=""
                className="w-14 grayscale-[1] hover:grayscale-0"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
