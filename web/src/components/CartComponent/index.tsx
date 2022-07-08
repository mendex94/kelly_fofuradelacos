import { Link } from "react-router-dom"
import CartItem from "../CartItem"
import FreteForm from "../FreteForm"
import TotalPrice from "../TotalPrice"
import { useSelector } from 'react-redux'
import { RootStore } from '../../store'
import { Product } from "../../@types/products"
import { useState } from "react"
import CheckoutModal from "../CheckoutModal"

function CartComponent() {
    const cart = useSelector((state: RootStore) => state.cart)
    const [active, setActive] = useState(false)

    const showModal = () => {
        setActive(!active)
    }

    return (
        <div className='flex justify-center bg-bege-100 md:pt-24'>
            <div className='container'>
                {cart.cartItems.length === 0 ? (
                    <div className='h-screen flex justify-center pt-72'>
                        <div>
                            <p className='font-montserrat font-bold text-h3'>Seu carrinho está vazio!</p>
                            <Link to='/catalogo' className='font-semibold text-rosa-200 text-h4 underline underline-offset-1'>Começar a comprar</Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='hidden md:flex border-b border-rosa-400 text-h5 mb-14 font-montserrat'>
                            <h3 className='w-[40%] pl-14 text-h3'>PRODUTOS</h3>
                            <h3 className='w-1/5 text-right text-h3'>QUANTIDADE</h3>
                            <h3 className='w-1/5 pl-16 text-h3'>VALOR</h3>
                        </div>
                        <div className='container md:flex md:justify-between'>
                            <div className=''>
                                {cart.cartItems.map((product: Product) => (
                                    <CartItem key={product.id} product={product} />
                                ))}
                            </div>
                            <div className='flex flex-col'>
                                <FreteForm />
                                <TotalPrice subtotal={cart.cartTotalAmount} />
                                <button onClick={showModal} className='w-full bg-rosa-200 py-5 rounded-lg text-bege-100 mb-5 text-h3 font-semibold'>Enviar o Pedido</button>
                                <Link to='/catalogo' className='text-center w-full text-rosa-200 underline underline-offset-1 text-h3 mb-5'>Continuar comprando</Link>
                                <CheckoutModal showModal={showModal} active={active}/>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default CartComponent