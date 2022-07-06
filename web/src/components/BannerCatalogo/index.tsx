import BannerLeaf from '../BannerLeaf'

interface BannerCatalogoProps {
  title: string,
  frase: string
}

function BannerCatalogo({title, frase}: BannerCatalogoProps) {
  return (
    <div className='hidden w-full bg-rosa-200 h-[488px] p-0 md:flex'>
      <BannerLeaf />
      <div className='text-bege-200 font-montserrat flex justify-center flex-col flex-1 mr-96'>
        <h1 className='text-center font-semibold text-[100px]'>{title}</h1>
        <p className='text-p2 text-center'>{frase}</p>
      </div>
    </div>
  )
}

export default BannerCatalogo