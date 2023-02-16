import { Icon } from '@iconify/react'
import { socialLinks } from '../constants/mock'

export default function SocialLinks() {
  return (
    <div className="mb-6">
      <div className="flex justify-center md:justify-start gap-4 text-5xl ">
        {socialLinks.map(item => (
          <a href={item.link.url}>
            <Icon
              icon={item.icon}
              className="text-gray-600 hover:text-white transition duration-150 ease-in-out  hover:-translate-z-1 hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
