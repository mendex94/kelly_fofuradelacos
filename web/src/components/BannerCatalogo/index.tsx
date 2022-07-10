import BannerLeaf from '../BannerLeaf'

interface BannerCatalogoProps {
  title: string,
  frase: any
}

function BannerCatalogo({title, frase}: BannerCatalogoProps) {
  return (
    <div className='hidden w-full bg-rosa-200 h-[488px] p-0 md:flex relative'>
      <div className='absolute m-0 auto'>
        <BannerLeaf />
      </div>
      <div className='text-[#FFFF] font-montserrat m-auto flex justify-center flex-col relative'>
        <h1 className='text-center font-bold py-4 text-[80px]'>{title}</h1>
        <p className='text-p2 text-center md:whitespace-nowrap'>{frase}</p>
      </div>
    </div>
  )
}

export default BannerCatalogo