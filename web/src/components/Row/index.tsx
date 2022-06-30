import { useRef, useState } from "react"
import RowCard from "../RowCard"
import RowTitle from "../RowTitle"
import LeftIcon from '../../assets/LeftIcon.svg'
import RightIcon from '../../assets/RightIcon.svg'

function Row() {
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
    <div className='w-full'>
      <RowTitle />
      <div className='flex group relative items-center'>
        <button onClick={() => handleClick('left')} className={`absolute z-40 m-auto left-11 cursor-pointer hover:scale-125 transition
                    ${!isMoved && 'hidden'}`}><img src={LeftIcon} alt="" /></button>
        <div className='flex overflow-x-scroll scrollbar-hide items-center space-x-10 justify-center' ref={rowRef}>
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
          <RowCard />
        </div>
        <button onClick={() => handleClick('right')} className={`z-40 m-auto cursor-pointer hover:scale-125 transition top-0 bottom-0 absolute right-7`}><img src={RightIcon} alt="" /></button>
      </div>
    </div>
  )
}

export default Row