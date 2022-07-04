import React from 'react'

function TotalPrice() {
  return (
    <div className='bg-[#FFFFFF] p-5 md:rounded-lg text-preto-100 mb-5'>
        <h2 className='text-h5 font-semibold font-montserrat'>Resumo do Pedido</h2>
        <div className='flex justify-between py-5 border-b-4 border-rosa-400'>
            <div className='flex flex-col font-montserrat font-semibold text-p3'>
                <p>Subtotal</p>
                <p>Frete</p>
            </div>
            <div className='flex flex-col font-montserrat font-semibold text-p3'>
                <p>R$ 38,00</p>
                <p>R$ 15,00</p>
            </div>
        </div>
        <div className='flex justify-between py-5 font-montserrat'>
            <p className='text-h6 font-semibold'>Total</p>
            <p className='text-h5 font-bold'>R$ 53,00</p>
        </div>
    </div>
  )
}

export default TotalPrice