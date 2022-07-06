import { Link, useLocation } from "react-router-dom"
import LacoPreto1 from '../../assets/lacopreto1.png'
import LacoPreto2 from '../../assets/lacopreto2.png'
import LacoPreto3 from '../../assets/lacopreto3.png'
import Rating from '@mui/material/Rating'
import { Product } from "../../@types/products"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/modules/cart"

function ProductItem() {
  const location = useLocation()
  const product: Product = location.state
  console.log(product)
  const dispatch = useDispatch()
    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }

  return (
    <div className='bg-bege-100 py-6 w-full'>
      <div className='font-montserrat text-h5 text-preto-100 md:container md:mx-auto mb-4'>
        <Link to='/'>Home</Link>/<Link to='/catalogo'>Loja</Link>/<p className='inline'>Laço de Linho - Preto</p>
      </div>
      <div className='container mx-auto flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:flex-row'>
          <div className='hidden md:hidden lg:flex lg:flex-col gap-4'>
            <img className='object-cover' src={LacoPreto1} alt="" />
            <img className='object-cover' src={LacoPreto2} alt="" />
          </div>
          <img className='object-cover' src={LacoPreto3} alt="" />
        </div>
        <div className='text-black-100 mx-auto'>
          <h2 className='font-montserrat font-semibold text-h3'>{product.description}</h2>
          <Rating name="read-only" value={1} readOnly style={{ color: '#BC8383' }} size='large' />
          <div className='mb-4'>
          <p className='text-p4 text-preto-100 max-w-[400px] leading-relaxed mt-6'>Nosso laço é leve, confortável e delicado para deixar o seu look muito
                                                                                mais interessante. Feito em linho de alta qualidade, este delicado laço
                                                                                pode ser usado no coque, no rabo de cavalo e em diversos penteados
                                                                                criativos. Vai do casual ao elegante sem esforço algum.</p>
          <p className='text-p4 text-preto-100 max-w-[400px] leading-relaxed'>Todas as nossas peças são feitas à mão uma a uma, podendo sofrer
            pequenas variações. São modelos exclusivos, feitos somente para
            você!</p>
          </div>
          <div className='mb-14'>
            <h3 className='text-h6 font-semibold text-preto-100'>Detalhes do produto</h3>
            <div className='flex text-preto-100 text-p3 gap-5'>
              <p className='p-[10px] rounded-[33px] text-center bg-rosa-400 text-rosa-100 font-medium text-p3'>15 cm x 17 cm</p>
              <p className='p-[10px] rounded-[33px] text-center bg-rosa-400 text-rosa-100 font-medium text-p3'>preto</p>
              <p className='p-[10px] rounded-[33px] text-center bg-rosa-400 text-rosa-100 font-medium text-p3'>linho</p>
              <p className='p-[10px] rounded-[33px] text-center bg-rosa-400 text-rosa-100 font-medium text-p3'>pedraria</p>
            </div>
          </div>
          <h3 className='text-h3 text-preto-100'>R$ {product.price},00</h3>
          <button onClick={() => handleAddToCart(product)} className='font-montserrat text-p2 font-bege-200 bg-rosa-200 px-9 py-5 w-full rounded-2xl text-[#FFFFFF] font-bold'>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem