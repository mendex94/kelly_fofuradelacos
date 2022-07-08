import { Link, useLocation } from "react-router-dom"
import LacoPreto1 from '../../assets/lacopreto1.png'
import LacoPreto2 from '../../assets/lacopreto2.png'
import LacoPreto3 from '../../assets/lacopreto3.png'
import Rating from '@mui/material/Rating'
import { Product } from "../../@types/products"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/modules/cart"
import MaterialPill from "../MaterialPill"

function ProductItem() {
  const location = useLocation()
  const product: Product = location.state
  console.log(product)
  const dispatch = useDispatch()
    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }
    console.log(product)
  return ( 
    <div className='bg-bege-100 py-6 w-full'>
      <div className='font-montserrat text-h5 text-preto-100 md:container md:mx-auto mb-4'>
        <Link to='/'>Home</Link>/<Link to='/catalogo'>Loja</Link>/<p className='inline'>{product.description}</p>
      </div>
      <div className='container mx-auto flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:flex-row gap-3'>
          <div className='hidden md:hidden lg:flex lg:flex-col gap-5'>
            <img className='object-cover max-h-[309px]' src={LacoPreto1} alt="" />
            <img className='object-cover max-h-[309px]' src={LacoPreto2} alt="" />
          </div>
          <img className='object-fill max-h-[638px]' src={LacoPreto3} alt="" />
        </div>
        <div className='text-black-100 mx-auto flex flex-col max-h-[630px] justify-between'>
          <div>
          <h2 className={`font-montserrat font-semibold max-w-[464px] ${product.description.length > 15 ? 'text-p2' : 'text-h3'}`}>{product.description}</h2>
          <Rating name="read-only" value={product.overall_evaluation} readOnly style={{ color: '#BC8383' }} size='large' />
          <div className='mb-4'>
          <p className='text-p4 text-preto-100 max-w-[400px] leading-relaxed mt-4'>{product.notes}</p>
          <p className='text-p4 text-preto-100 max-w-[400px] leading-relaxed'>Todas as nossas peças são feitas à mão uma a uma, podendo sofrer
            pequenas variações. São modelos exclusivos, feitos somente para
            você!</p>
          </div>
          <div className='mb-6'>
            <h3 className='text-h6 font-semibold text-preto-100 leading-10'>Detalhes do produto</h3>
            <div className='flex text-preto-100 text-p3 gap-5'>
              {product.Materials.map((material) => 
                <MaterialPill material={material} key={material.id}/>
              )}
            </div>
          </div>
          </div>
          <div>
          <h3 className='text-h3 text-preto-100 font-semibold'>R$ {product.price},00</h3>
          <button onClick={() => handleAddToCart(product)} className='font-montserrat text-p2 font-bege-200 bg-rosa-200 px-9 py-5 w-full rounded-2xl text-[#FFFFFF] font-bold'>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem