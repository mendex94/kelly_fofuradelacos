import { Link } from "react-router-dom"
import CartItem from "../CartItem"
import FreteForm from "../FreteForm"
import TotalPrice from "../TotalPrice"

function CartComponent() {
  return (
    <div className='flex justify-center bg-bege-100 md:pt-24'>
        <div className='container'>
            <div className='hidden md:flex border-b border-rosa-400 text-h5 mb-14 font-montserrat'>
                <h3 className='w-2/4 pl-14'>PRODUTOS</h3>
                <h3 className='w-1/5 pl-3'>QUANTIDADE</h3>
                <h3 className='w-1/5 pl-3'>VALOR</h3>
            </div>
        <div className='container md:flex md: gap-12 md:justify-between'>
            <div className=''>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className='flex flex-col'>
                <FreteForm />
                <TotalPrice />
                <button className='w-full bg-rosa-200 font-montserrat py-5 rounded-lg text-bege-100 mb-5'>Enviar o Pedido</button>
                <Link to='/catalogo' className='font-montserrat text-center w-full text-rosa-200 underline underline-offset-1 font-normal text-h6 mb-5'>Continuar comprando</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CartComponent