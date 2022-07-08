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
        <div className='rounded-[35px] shadow-lg bg-[#FFFFFF] transition my-10 cursor-pointer snap-center flex-shrink-0 md:hover:scale-105 snap-always'>
            <Link to={`/produto`} state={product}>
                <img className='object-cover' src={product.Product_album[0]?.url_image} alt="" />
            </Link>            
            <div className='flex justify-between items-center px-6 my-4 w-full relative'>
                <div className='text-montserrat'>
                    <p className={`font-medium ${product.description.length > 20 ? 'text-p4' : 'text-p3'}`}>{product.description}</p>
                    <p className='font-montserrat font-bold text-[36px]'>R$ {product.price},00</p>
                </div>

                <button className='absolute right-7 bottom-3' onClick={()=> handleAddToCart(product)}><CardButton/></button>
            </div>

        </div>
    )
}

export default RowCard