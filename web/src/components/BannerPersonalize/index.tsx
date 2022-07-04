import BannerLeaf from '../BannerLeaf'

function BannerPersonalize() {
  return (
    <div className='hidden w-full bg-rosa-200 h-[488px] p-0 md:flex'>
      <BannerLeaf />
      <div className='text-bege-200 font-fiona flex justify-center flex-col flex-1'>
        <h1 className='text-center text-[150px]'>Personalize</h1>
        <p className='text-h3 text-center'>Quer algo mais exclusivo? Personalize seus acessórios do seu jeitinho!</p>
      </div>
    </div>
  )
}

export default BannerPersonalize