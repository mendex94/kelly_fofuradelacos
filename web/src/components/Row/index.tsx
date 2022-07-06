import { useRef, useState } from "react"
import RowCard from "../RowCard"
import RowTitle from "../RowTitle"
import LeftIcon from '../../assets/LeftIcon.svg'
import RightIcon from '../../assets/RightIcon.svg'
import { Product } from "../../@types/products"

interface RowProps {
  title: string,
  product: Product[]
}

function Row({ title, product }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }


  return (
    <div className='w-full md:container mx-auto bg-white flex flex-col'>
      <RowTitle title={title} />
      <div className='flex flex-nowrap gap-4 items-center justify-center'>
        <div>
          <button onClick={() => handleClick('left')} className={`hidden md:inline z-40 m-auto cursor-pointer hover:scale-125 transition
                    ${!isMoved && 'hidden'}`}><img src={LeftIcon} alt="" /></button>
        </div>
        <div className='flex justify-between overflow-x-auto scrollbar-hide snap-mandatory snap-x mx-10 md:mx-0' ref={rowRef}>
          <div className='flex gap-12 md:mx-0 md:ml-6 mx-auto'>
            {product.map((product) => (
              <RowCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div>
          <button onClick={() => handleClick('right')} className={`hidden md:inline z-40 m-auto cursor-pointer hover:scale-125 transition`}><img src={RightIcon} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Row