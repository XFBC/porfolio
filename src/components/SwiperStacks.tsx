import Stacks from './Stacks'
import Marquee from 'react-fast-marquee'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

export default function App() {
  const [prismicStacks] = useAllPrismicDocumentsByType<any>('stacks')
  console.log(prismicStacks)
  return (
    <div className="md:mt-[70px] mt-8">
      <Marquee gradient={false} speed={80}>
        {prismicStacks?.map((item) => (
          <Stacks image={item.data.image.url}  />
        ))}
        
      </Marquee>
    </div>
  )
}
