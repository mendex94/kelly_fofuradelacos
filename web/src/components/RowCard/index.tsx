import { Product } from '../../@types/products'
import LacoFloral from '../../assets/lacofloral.png'
import CardButton from '../CardButton'
import { useDispatch } from 'react-redux' 
import { addToCart } from '../../store/modules/cart'
import { Link } from 'react-router-dom'

interface RowCardProps {
    product: Product
}

function RowCard({product}: RowCardProps) {
    const dispatch = useDispatch()
    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className='rounded-[35px] shadow-lg bg-white transition my-10 cursor-pointer snap-center flex-shrink-0 md:hover:scale-105 snap-always'>
            <Link to='/produto'>
                <img className='' src={LacoFloral} alt="" />
            </Link>            
            <div className='flex justify-between items-center px-6 my-4 w-full'>
                <div className='text-montserrat'>
                    <p className='text-p3 font-medium'>{product.description}</p>
                    <p className='font-montserrat font-bold text-[36px]'>R$ {product.price},00</p>
                </div>

                <button onClick={()=> handleAddToCart(product)}><CardButton/></button>
            </div>

        </div>
    )
}

export default RowCard