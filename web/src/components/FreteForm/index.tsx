import React from 'react'

function FreteForm() {
  return (
    <div className='bg-[#FFFFFF] py-8 px-5 flex flex-col gap-5 mb-5 md:rounded-lg'>
        <h1 className='text-h5 font-semibold font-montserrat text-preto-100' >Calcular o Frete</h1>
        <div className='flex gap-4'>
            <input type="text" placeholder='Digite o seu CEP' className='border-4 border-rosa-400 rounded-lg placeholder-rosa-400 p-1 w-64 text-rosa-400 focus:outline-none'/>
            <button className='bg-rosa-200 rounded-lg p-2 font-semibold text-bege-100 w-14 hover:bg-rosa-100'>OK</button>
        </div>
    </div>
  )
}

export default FreteForm