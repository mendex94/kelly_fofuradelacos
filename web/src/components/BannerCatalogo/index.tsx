import BannerLeaf from '../BannerLeaf'

function BannerCatalogo() {
  return (
    <div className='hidden w-full bg-rosa-200 h-[488px] p-0 md:flex'>
        <BannerLeaf />
        <div className='text-bege-200 font-fiona flex justify-center flex-col flex-1'>
        <h1 className='text-center text-[150px]'>Loja</h1>
        <p className='text-h3 text-center'>Consulte nosso catalogo feito com cuidado e amor para você!</p>
        </div>
    </div>
  )
}

export default BannerCatalogo