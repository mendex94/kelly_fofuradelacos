import { Link } from "react-router-dom"
import CartItem from "../CartItem"
import FreteForm from "../FreteForm"
import TotalPrice from "../TotalPrice"
import { useSelector } from 'react-redux'
import { RootStore } from '../../store'
import { Product } from "../../@types/products"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTotals } from "../../store/modules/cart"

function CartComponent() {
    const cart = useSelector((state: RootStore) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    return (
        <div className='flex justify-center bg-bege-100 md:pt-24'>
            <div className='container'>
                {cart.cartItems.length === 0 ? (
                    <div className='h-screen flex justify-center pt-72'>
                        <div>
                            <p className='font-montserrat font-bold text-h4'>Seu carrinho está vazio!</p>
                            <Link to='/catalogo' className='font-semibold text-rosa-200 text-h5 underline underline-offset-1'><ArrowBackOutlinedIcon /> Começar a comprar</Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='hidden md:flex border-b border-rosa-400 text-h5 mb-14 font-montserrat'>
                            <h3 className='w-[40%] pl-14'>PRODUTOS</h3>
                            <h3 className='w-1/5 text-right'>QUANTIDADE</h3>
                            <h3 className='w-1/5 pl-16'>VALOR</h3>
                        </div>
                        <div className='container md:flex md:justify-between'>
                            <div className=''>
                                {cart.cartItems.map((product: Product) => (
                                    <CartItem key={product.id} product={product}/>
                                ))}
                            </div>
                            <div className='flex flex-col'>
                                <FreteForm />
                                <TotalPrice subtotal={cart.cartTotalAmount}/>
                                <button className='w-full bg-rosa-200 font-montserrat py-5 rounded-lg text-bege-100 mb-5 font-bold'>Enviar o Pedido</button>
                                <Link to='/catalogo' className='font-montserrat text-center w-full text-rosa-200 underline underline-offset-1 font-normal text-h6 mb-5'>Continuar comprando</Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default CartComponent