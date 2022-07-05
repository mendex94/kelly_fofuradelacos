import BannerLeaf from '../BannerLeaf'

function BannerCatalogo() {
  return (
    <div className='hidden w-full bg-rosa-200 h-[488px] p-0 md:flex'>
      <BannerLeaf />
      <div className='text-bege-200 font-montserrat flex justify-center flex-col flex-1'>
        <h1 className='text-center font-semibold text-[100px]'>Loja</h1>
        <p className='text-p2 text-center'>Consulte nosso catalogo feito com <span className='font-semibold'>cuidado e amor</span> para você!</p>
      </div>
    </div>
  )
}

export default BannerCatalogo